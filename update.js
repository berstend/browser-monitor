// @ts-check
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

// https://stackoverflow.com/a/22429679
const hashMini = (str) => {
  const json = `${JSON.stringify(str)}`
  let i,
    len,
    hash = 0x811c9dc5
  for (i = 0, len = json.length; i < len; i++) {
    hash = (Math.imul(31, hash) + json.charCodeAt(i)) | 0
  }
  return ("0000000" + (hash >>> 0).toString(16)).substr(-8)
}

const fetchRemoteVersions = async () => {
  const get = async (channel = "") =>
    JSON.parse(
      (
        await got(
          `https://chromiumdash.appspot.com/fetch_releases?channel=${channel}&platform=Linux&num=30&offset=0`
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

const getCDPFilePath = (prefix = "", version = "") =>
  `./cdp/${prefix}_${version}.json`

const getCDPDiffFilePath = (prefix = "", previousVersion = "", version = "") =>
  `./cdp/${prefix}_${previousVersion}_to_${version}.diff`

const getCDPProtocolFilePath = (prefix = "", version = "") =>
  `./cdp/${prefix}_${version}.protocol.json`

const getCDPProtocolDiffFilePath = (
  prefix = "",
  previousVersion = "",
  version = ""
) => `./cdp/${prefix}_${previousVersion}_to_${version}.protocol.diff`

const getBrowserApiFilePath = (prefix = "", version = "") =>
  `./browser_apis/${prefix}_${version}.json`

const getBrowserApiDiffFilePath = (
  prefix = "",
  previousVersion = "",
  version = ""
) => `./browser_apis/${prefix}_${previousVersion}_to_${version}.diff`

const handleChromeEntries = async (prefix = "", remoteVersions = []) => {
  console.log("handleChromeEntries", prefix, remoteVersions.length)

  const list = [...remoteVersions.entries()].reverse()

  console.log(list)

  for (const [i, entry] of list) {
    const previousVersion = entry.previous_version
    // const previousVersion = i > 0 ? remoteVersions[i + 1].version : null

    const browserApiFilePath = getBrowserApiFilePath(prefix, entry.version)
    const cdpFilePath = getCDPFilePath(prefix, entry.version)
    const browserApiExists = await fileExists(browserApiFilePath)
    const cdpExists = await fileExists(cdpFilePath)
    console.log({
      entry,
      browserApiFilePath,
      previousVersion,
      browserApiExists,
      cdpExists,
    })

    let browserApiData, cdpData

    if (browserApiExists) {
      console.log(" - browserApiData exists already", browserApiFilePath)
      browserApiData = require(browserApiFilePath)
    }
    if (cdpExists) {
      console.log(" - cdpData exists already", cdpFilePath)
      cdpData = require(cdpFilePath)
    }

    const needsData = !browserApiExists || !cdpExists
    if (needsData) {
      console.log("Needs data", { browserApiExists, cdpExists })

      if (isCI) {
        await installChromeVersion(prefix, entry.version)
      }

      const fullBrowserData = await getBrowserData()

      if (!browserApiExists) {
        browserApiData = {
          browser: prefix,
          date: entry.updated,
          ...fullBrowserData.browserApis,
        }
        console.log(" - writing:", browserApiFilePath)
        require("fs").writeFileSync(
          browserApiFilePath,
          JSON.stringify(browserApiData, null, 2)
        )
      }
      if (!cdpExists) {
        const {
          protocolHash,
          commandsCount,
          commandsHash,
          eventsCount,
          eventsHash,
          commands,
          events,
          protocol,
        } = fullBrowserData.cdp

        cdpData = {
          browser: prefix,
          version: fullBrowserData.version,
          date: entry.updated,
          protocolHash,
          commandsCount,
          commandsHash,
          eventsCount,
          eventsHash,
          commands,
          events,
        }
        console.log(" - writing:", cdpFilePath)
        require("fs").writeFileSync(
          cdpFilePath,
          JSON.stringify(cdpData, null, 2)
        )
        const cdpProtocolFilePath = getCDPProtocolFilePath(
          prefix,
          entry.version
        )
        console.log(" - writing:", cdpProtocolFilePath)
        require("fs").writeFileSync(
          cdpProtocolFilePath,
          JSON.stringify(protocol, null, 2)
        )
      }
    }

    if (previousVersion) {
      await (async function () {
        const filePath = getCDPProtocolFilePath(prefix, entry.version)
        const previousFilePath = getCDPProtocolFilePath(prefix, previousVersion)
        const diffFilePath = getCDPProtocolDiffFilePath(
          prefix,
          previousVersion,
          entry.version
        )
        const hasPreviousFile = await fileExists(previousFilePath)
        if (!hasPreviousFile) {
          console.log("Previous file not found:", previousFilePath)
          return
        }
        if (await fileExists(diffFilePath)) {
          console.log("Diff already exists:", diffFilePath)
          return
        }
        console.log(" - exec diff")
        await exec(
          `diff -u ${previousFilePath} ${filePath} > ${diffFilePath}`
        ).catch(console.log)
        console.log(" - exec diff: finished", diffFilePath)
      })()
    }

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

      const hasPreviousBrowserData = await fileExists(
        previousBrowserApiFilePath
      )

      if (!hasPreviousBrowserData) {
        console.warn(
          "Previous browser data not found",
          previousBrowserApiFilePath
        )
        continue
      }

      if (await fileExists(browserApiDiffFilePath)) {
        console.log("Diff already exists:", browserApiDiffFilePath)
        continue
      }

      const previousBrowserData = require(previousBrowserApiFilePath)

      console.log({ previousBrowserApiFilePath, browserApiDiffFilePath })

      const added = browserApiData.browserApis.filter(
        (x) => !previousBrowserData.browserApis.includes(x)
      )
      const removed = previousBrowserData.browserApis.filter(
        (x) => !browserApiData.browserApis.includes(x)
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
    args: ["--remote-debugging-port=9222", "--disable-gpu"],
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
  console.log("getBrowserData - version")
  const version = await page.evaluate(async () => {
    return await navigator.userAgentData
      .getHighEntropyValues(["fullVersionList"])
      .then((values) => {
        const chromeVersion = values.fullVersionList.find(
          (entry) => entry.brand === "Google Chrome"
        )
        return chromeVersion?.version
      })
  })

  // const userAgent = await page.evaluate(() => navigator.userAgent)
  // console.log("getBrowserData - regex")
  // const version = /\(KHTML, like Gecko\) Chrome\/(?<ver>.*) Safari\//gm.exec(
  //   userAgent
  // )?.groups?.ver
  console.log(version, browserApis.length)

  const cdpJSON = await got("http://localhost:9222/json/protocol/").json()
  const cdp = parseCDPJSON(cdpJSON)

  console.log("getBrowserData - closing")
  await browser.close()
  console.log("getBrowserData - finished", version, browserApis.length)
  return {
    version,
    browserApis: {
      browserApiCount: browserApis.length,
      browserApis,
    },
    cdp,
  }
}

async function generateReleasesFile(prefix = "", entries = []) {
  const releases = entries
    .map((e) => ({
      ...e,
      previousVersion: e.previous_version,
      versionMajor: parseInt(e.version.split(".")[0]),
      date: getSimpleDate(new Date(e.time)),
    }))
    // .reverse()
    .map((r) => {
      const apiData = require(getBrowserApiFilePath(prefix, r.version))
      const cdpData = require(getCDPFilePath(prefix, r.version))
      return {
        ...r,
        browserApis: { count: apiData.browserApiCount },
        cdp: {
          protocolHash: cdpData.protocolHash,
          commandsCount: cdpData.commandsCount,
          commandsHash: cdpData.commandsHash,
          eventsCount: cdpData.eventsCount,
          eventsHash: cdpData.eventsHash,
        },
      }
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

    const hasDiffData = await fileExists(browserApiDiffFilePath)
    if (hasDiffData) {
      const diff = require(browserApiDiffFilePath)
      releases[i].browserApis.added = diff.browserApis.added.length
      releases[i].browserApis.removed = diff.browserApis.removed.length
    }
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

  let versionNum = 50
  if (process.env.LIMIT_VERSIONS) {
    versionNum = parseInt(process.env.LIMIT_VERSIONS)
    console.log("Limiting version count", process.env.LIMIT_VERSIONS)
  }

  const chromeData = [
    // Only mind the most recent 20 entries
    ["chrome-stable", remoteVersions.chrome.stable.slice(versionNum * -1)],
    ["chrome-unstable", remoteVersions.chrome.unstable.slice(versionNum * -1)],
  ]
  let md = ""
  for (const [prefix, versions] of chromeData) {
    await handleChromeEntries(prefix, versions)

    console.log("generate releases")
    const releases = await generateReleasesFile(prefix, versions)
    console.log("releases", releases)
    md += generateMarkdown(prefix, releases)
  }
  if (md) {
    console.log("updateMarkdown")
    updateMarkdown(md)
  }

  console.log("Finish")
}

function parseCDPJSON(protocol) {
  const flattenEntries = (domain) => (entry) => {
    const params = [...(entry.parameters || []).map((param) => param.name)]
    return params.length
      ? `${domain.domain}.${entry.name}(${params.join(",")})`
      : `${domain.domain}.${entry.name}`
  }

  const commands = protocol.domains.flatMap((domain) =>
    (domain.commands || []).flatMap(flattenEntries(domain))
  )
  const commandsCount = commands.length
  const commandsHash = hashMini(commands)
  const events = protocol.domains.flatMap((domain) =>
    (domain.events || []).flatMap(flattenEntries(domain))
  )
  const eventsCount = events.length
  const eventsHash = hashMini(events)

  const protocolHash = hashMini(protocol)

  return {
    protocolHash,
    commandsCount,
    commandsHash,
    eventsCount,
    eventsHash,
    commands,
    events,
    protocol,
  }
}

init()
