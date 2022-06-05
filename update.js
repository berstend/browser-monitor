const fs = require("fs/promises")
const util = require("util")
const exec = util.promisify(require("child_process").exec)

const puppeteer = require("puppeteer-core")
const got = require("got")

const fileExists = async (path) => !!(await fs.stat(path).catch((e) => false))

const isCI = process.env.USER === "runner"

const getSimpleDate = (d) => {
  return `${d.getUTCFullYear()}-${d.getUTCMonth() + 1}-${d.getUTCDate()}`
}

const fetchRemoteVersions = async () => {
  const get = async (channel = "") =>
    JSON.parse(
      (
        await got(
          `https://chromiumdash.appspot.com/fetch_releases?channel=${channel}&platform=Linux&num=20&offset=0`
        )
      ).body
    )

  return {
    chrome: {
      stable: await get("Stable"),
      unstable: await get("Dev"),
    },
  }
}

const installChromeVersion = async (prefix = "", version = "") => {
  console.log("installChromeVersion", prefix, version)
  try {
    const resp = await exec(
      `BROWSER_PREFIX=${prefix} BROWSER_VERSION=${version} bash install_chrome.sh`
    )
    console.log("installChromeVersion - success", resp)
    return true
  } catch (err) {
    console.log("installChromeVersion - error", err)
    return false
  }
}

const getBrowserApiFilePath = (prefix = "", version = "") =>
  `./browser_apis/${prefix}_${version}.json`

const getBrowserApiDiffFilePath = (
  prefix = "",
  previousVersion = "",
  version = ""
) => `./browser_apis/${prefix}_${previousVersion}_to_${version}.diff`

const handleChromeEntries = async (prefix = "", remoteVersions = []) => {
  if (!isCI) {
    remoteVersions = remoteVersions.slice(0, 3)
  }
  console.log("handleChromeEntries", prefix, remoteVersions.length)

  for (const [i, entry] of remoteVersions.entries().reverse()) {
    const previousVersion = entry.previous_version
    // const previousVersion = i > 0 ? remoteVersions[i + 1].version : null
    const browserApiFilePath = getBrowserApiFilePath(prefix, entry.version)
    const exists = await fileExists(browserApiFilePath)
    console.log({ entry, browserApiFilePath, previousVersion, exists })
    if (exists) {
      console.log(" - entry exists already")
      continue
    }
    console.log(" - entry does not yet exist")

    if (isCI) {
      await installChromeVersion(prefix, entry.version)
    }

    const browserData = await getBrowserData()
    console.log(" - writing")
    require("fs").writeFileSync(
      browserApiFilePath,
      JSON.stringify(
        { browser: prefix, date: entry.updated, ...browserData },
        null,
        2
      )
    )
    if (previousVersion) {
      const previousBrowserApiFilePath = getBrowserApiFilePath(
        prefix,
        previousVersion
      )
      const browserApiDiffFilePath = getBrowserApiDiffFilePath(
        prefix,
        previousVersion,
        entry.version
      )
      const previousBrowserData = require(previousBrowserApiFilePath)

      console.log({ previousBrowserApiFilePath, browserApiDiffFilePath })

      const added = browserData.browserApis.filter(
        (x) => !previousBrowserData.browserApis.includes(x)
      )
      const removed = previousBrowserData.browserApis.filter(
        (x) => !browserData.browserApis.includes(x)
      )
      require("fs").writeFileSync(
        browserApiDiffFilePath.replace(".diff", ".json"),
        JSON.stringify(
          {
            browser: prefix,
            version: { from: previousVersion, to: entry.version },
            browserApis: {
              added,
              removed,
            },
          },
          null,
          2
        )
      )
      console.log(" - exec diff")
      await exec(
        `diff -u ${previousBrowserApiFilePath} ${browserApiFilePath} > ${browserApiDiffFilePath}`
      ).catch(console.log)
      console.log(" - exec diff: finished")
    }
  }
}

async function getBrowserData() {
  console.log("getBrowserData")
  const launchOptions = {
    headless: false,
    defaultViewport: null,
    ignoreDefaultArgs: ["--disable-component-extensions-with-background-pages"],
    executablePath: isCI
      ? "/usr/bin/google-chrome"
      : "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    // executablePath:
    //   "/Applications/Google Chrome Canary.app/Contents/MacOS/Google Chrome Canary",
  }

  console.log("getBrowserData - launching")
  const browser = await puppeteer.launch(launchOptions)
  const page = await browser.newPage()
  console.log("getBrowserData - navigating")
  await page.goto("https://example.com") // secure origin
  console.log("getBrowserData - evaluating")
  const browserApis = await page.evaluate(() => {
    function getBrowserAPIs() {
      const apis = []
      const seen = new Set()
      const isTraversable = (obj) => {
        return obj && (typeof obj === "function" || typeof obj === "object")
      }
      const traverse = (obj, parent) => {
        if (seen.has(obj)) {
          return
        }
        apis.push(parent)
        seen.add(obj)
        const descriptors = Object.getOwnPropertyDescriptors(obj)
        for (const prop in descriptors) {
          const descriptor = descriptors[prop]
          for (const field in descriptor) {
            if (descriptor[field] && isTraversable(descriptor[field])) {
              traverse(descriptor[field], [...parent, prop])
            }
          }
        }
        const proto = Object.getPrototypeOf(obj)
        if (proto) {
          traverse(proto, parent) // traverse function protos
        }
      }
      traverse(window, [])
      return Array.from(
        new Set(
          apis
            .filter((e) => e && e.length)
            .map((arr) => arr.join("."))
            .sort()
        )
      )
    }
    return getBrowserAPIs()
  })
  const userAgent = await page.evaluate(() => navigator.userAgent)
  console.log("getBrowserData - regex")
  const version = /\(KHTML, like Gecko\) Chrome\/(?<ver>.*) Safari\//gm.exec(
    userAgent
  )?.groups?.ver
  console.log(version, browserApis.length)
  console.log("getBrowserData - closing")
  await browser.close()
  console.log("getBrowserData - finished", version, browserApis.length)
  return {
    version,
    browserApiCount: browserApis.length,
    browserApis,
  }
}

function generateReleasesFile(prefix = "", entries = []) {
  const releases = entries
    .map((e) => ({
      ...e,
      previousVersion: e.previous_version,
      versionMajor: parseInt(e.version.split(".")[0]),
      date: getSimpleDate(new Date(e.time)),
    }))
    // .reverse()
    .map((r) => {
      const info = require(getBrowserApiFilePath(prefix, r.version))
      return { ...r, browserApis: { count: info.browserApiCount } }
    })
  for (const [i, entry] of releases.entries()) {
    // const previousVersion = releases[i + 1]?.version
    if (!entry.previousVersion) {
      continue
    }
    console.log(entry)

    releases[i].previousHashes = releases[i + 1]?.hashes

    const browserApiDiffFilePath = getBrowserApiDiffFilePath(
      prefix,
      entry.previousVersion,
      entry.version
    ).replace(".diff", ".json")
    const diff = require(browserApiDiffFilePath)
    releases[i].browserApis.added = diff.browserApis.added.length
    releases[i].browserApis.removed = diff.browserApis.removed.length
  }
  require("fs").writeFileSync(
    `./${prefix}-releases.json`,
    JSON.stringify(releases, null, 2)
  )
  return releases
}

function generateMarkdown(prefix = "", releases = []) {
  let md = `
### ${prefix}
  `
  for (const entry of releases) {
    const hasChanged =
      entry.browserApis?.added > 0 || entry.browserApis?.removed > 0
    const icon = hasChanged ? "⚡" : ""
    let desc = "No browser API changes."
    if (hasChanged) {
      const browserApiFilePath = getBrowserApiFilePath(prefix, entry.version)
      const browserApiDiffFilePath = getBrowserApiDiffFilePath(
        prefix,
        entry.previousVersion,
        entry.version
      )
      const diff = require("fs").readFileSync(browserApiDiffFilePath)
      desc = `Added ${entry.browserApis?.added} APIs, removed ${
        entry.browserApis?.removed
      } (see: [diff](${browserApiDiffFilePath}), [json](${browserApiDiffFilePath.replace(
        ".diff",
        ".json"
      )}), [full list](${browserApiFilePath}))`
      desc += "\n ```diff\n" + diff + "```"
    }
    md += `
#### ${entry.version} (\`${entry.date}\`) ${icon}
${desc}

  `
  }
  return md
}

function updateMarkdown(md = "") {
  let mdFile = require("fs").readFileSync("./readme.md") + ""
  mdFile = mdFile.replace(
    /<!-- browserapis:start -->[\s\S]*?<!-- browserapis:end -->/,
    "<!-- browserapis:start -->" + md + "<!-- browserapis:end -->"
  )
  require("fs").writeFileSync("./readme.md", mdFile)
}

async function init() {
  console.log("Start", { isCI })
  const remoteVersions = await fetchRemoteVersions()
  console.log(
    "remoteVersions - stable",
    remoteVersions.chrome.stable.map((x) => x.version)
  )
  console.log(
    "remoteVersions - unstable",
    remoteVersions.chrome.unstable.map((x) => x.version)
  )

  const chromeData = [
    // Only mind the most recent 20 entries
    ["chrome-stable", remoteVersions.chrome.stable.slice(-20)],
    ["chrome-unstable", remoteVersions.chrome.unstable.slice(-20)],
  ]
  let md = ""
  for (const [prefix, versions] of chromeData) {
    await handleChromeEntries(prefix, versions)
    console.log("generate releases")
    const releases = generateReleasesFile(prefix, versions)
    console.log("releases", releases)
    md += generateMarkdown(prefix, releases)
  }
  if (md) {
    console.log("updateMarkdown")
    updateMarkdown(md)
  }

  console.log("Finish")
}

init()
