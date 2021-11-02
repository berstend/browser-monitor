const fs = require("fs/promises")
const util = require("util")
const exec = util.promisify(require("child_process").exec)

const puppeteer = require("puppeteer-core")
const got = require("got")

const fileExists = async (path) => !!(await fs.stat(path).catch((e) => false))

const isCI = process.env.USER === "runner"

const fetchRemoteVersions = async () =>
  JSON.parse(
    (
      await got(
        "https://raw.githubusercontent.com/Niek/browser-updates/main/browsers.json"
      )
    ).body
  )

const installChromeVersion = async (prefix = "", version = "") => {
  try {
    await exec(
      `BROWSER_PREFIX=${prefix} BROWSER_VERSION=${version} bash install_chrome.sh`
    )
    return true
  } catch (err) {
    console.log(err)
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
  for (const [i, entry] of remoteVersions.slice(0, 3).entries()) {
    const previousVersion = i > 0 ? remoteVersions[i - 1].version : null
    const browserApiFilePath = getBrowserApiFilePath(prefix, entry.version)
    const exists = await fileExists(browserApiFilePath)
    console.log({ entry, browserApiFilePath, previousVersion, exists })
    if (exists) {
      continue
    }

    if (isCI) {
      await installChromeVersion(prefix, entry.version)
    }

    const browserData = await getBrowserData()
    require("fs").writeFileSync(
      browserApiFilePath,
      JSON.stringify({ browser: prefix, ...browserData }, null, 2)
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
      console.log({ previousBrowserApiFilePath, browserApiDiffFilePath })
      await exec(
        `diff -u ${previousBrowserApiFilePath} ${browserApiFilePath} > ${browserApiDiffFilePath}`
      ).catch(console.log)
    }
  }
}

async function getBrowserData() {
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

  const browser = await puppeteer.launch(launchOptions)
  const page = await browser.newPage()
  await page.goto("https://example.com") // secure origin
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
  const version = /\(KHTML, like Gecko\) Chrome\/(?<ver>.*) Safari\//gm.exec(
    userAgent
  )?.groups?.ver
  console.log(version, browserApis.length)
  await browser.close()
  return {
    version,
    browserApiCount: browserApis.length,
    browserApis,
  }
}

async function init() {
  const remoteVersions = await fetchRemoteVersions()
  console.log(remoteVersions)
  await handleChromeEntries("chrome-stable", remoteVersions.chrome.stable)
  await handleChromeEntries("chrome-unstable", remoteVersions.chrome.unstable)
}
init()
