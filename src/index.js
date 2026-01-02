import puppeteer from "puppeteer"

// These are the variables/functions we will expose to window.rplacebot
// It includes the file the variable is found in, the name of the variable in that file, and what to call the variable when it is exposed to window.rplacebot
// Since the scripts on rplace.live are minimized, this will need to be updated whenever blobkat makes changes to the site. You can make your own code to detect the new name of the variables, but I will try to update them in the github when blobkat makes changes.
const toExpose = [
  { exposeAs: "wsCapsule", name: "on", fileRegex: /613e144c8c626202/ },
  { exposeAs: "sendIpcMessage", name: "H", fileRegex: /a4c2e679ae329eb2/ },
]
// Certain lines to change in the site's scripts
// These might change idk probably not unless blobkat changes them intentionally
const toReplace = [
  {
    regex:
      /window\.setInterval\s*\(\s*function\s*\(\s*\)\s*\{[\s\S]*?ondevtoolclose\s*.*?\.interval\s*\)/s,
    replacement: "6967420",
  },
]

class SimpleRplaceBot {
  async init() {
    await this.createPage()
    await this.setupNetworkInterception()
    await this.page.goto("https://rplace.live")
  }

  // Creates a browser page with puppeteer
  async createPage() {
    const browser = await puppeteer.launch({
      headless: false, // Makes the browser a physical window
      devtools: true, // Opens the devtools gui (not required)
      args: [
        // Makes browser look normal to cloudflare
        "--no-sandbox",
        "--disable-setuid-sandbox",
        "--disable-dev-shm-usage",
        "--no-first-run",
        "--no-zygote",
        "--disable-blink-features=AutomationControlled",

        // Misc
        "--mute-audio",
      ],
    })

    const page = await browser.newPage()
    this.page = page

    page.evaluateOnNewDocument(() => {
      // Disable service worker. I found that if it's not disabled, the site will not use our hijacked code when it is reloaded
      if ("serviceWorker" in navigator) {
        Object.defineProperty(navigator, "serviceWorker", {
          value: undefined,
          configurable: false,
          writable: false,
        })
      }
    })
  }

  async setupNetworkInterception() {
    const { page } = this

    const client = await page.createCDPSession()
    this.client = client

    // Tell the browser to pause requests of scripts or the document at the response stage
    await client.send("Fetch.enable", {
      patterns: [
        { requestStage: "Response", resourceType: "Script" },
        { requestStage: "Response", resourceType: "Document" },
      ],
    })

    client.on("Fetch.requestPaused", (event) => this.onRequest(event))
  }

  /**
   * Called when a request is being intercepted
   * Here we will hijack the scripts to inject code to expose certain functions/variables to window
   * @param {import("puppeteer").Protocol.Fetch.RequestPausedEvent} event
   */
  async onRequest(event) {
    const { requestId, request, responseHeaders, resourceType } = event
    const { url } = request
    const { client, page } = this

    if (url.includes("devtool")) {
      // Block request to fetch the disable-devtool package so that we can use devtools
      // Note that the disable-devtool code appears again in another script, so we need to block that too!
      return client.send("Fetch.failRequest", {
        requestId,
        errorReason: "ConnectionRefused",
      })
    }

    if (url.includes("cloudflare")) {
      // We can't modify cloudflare requests, so we will let those continue as normal
      return client.send("Fetch.continueRequest", { requestId })
    }

    // Get the body of the script/document
    const bodyResponse = await client.send("Fetch.getResponseBody", {
      requestId,
    })
    const body = bodyResponse.base64Encoded
      ? Buffer.from(bodyResponse.body, "base64").toString("utf8")
      : bodyResponse.body

    let hijackedBody = ""
    if (resourceType === "Document") {
      hijackedBody = this.hijackDocument(body, url)
    }
    if (resourceType === "Script") {
      hijackedBody = this.hijackScript(body, url)
    }

    // Needed because rplace is strict about content type
    const contentType =
      responseHeaders.find((h) => h.name.toLowerCase() === "content-type")
        ?.value ?? "application/javascript"
    const headers = [{ name: "Content-Type", value: contentType }]

    return client.send("Fetch.fulfillRequest", {
      requestId,
      responseCode: 200,
      body: Buffer.from(hijackedBody, "utf8").toString("base64"),
      responseHeaders: headers,
    })
  }

  /**
   *
   * @param {string} body
   * @param {string} url
   */
  hijackDocument(body, url) {
    body = body.replace(
      /script-src[^;]*;/g,
      "script-src * 'unsafe-inline' 'unsafe-eval';"
    ) // allows all scripts in the Content Security Policy including our own scripts

    body = body.replace(/ integrity="[^"]*"/g, "") // Disables integrity checks for scripts which we need to do because our scripts are not the same as the original scripts

    body = body.replace(
      /<\s*script\s*>[\s\S]*?window\.addEventListener\(\s*["']undefineglobals["'][\s\S]*?\)[\s\S]*?<\s*\/script\s*>/g,
      ""
    ) // Removes the script that deletes the WebSocket constructor. Not needed unless you're building your own websockets; I thought I would include it to help with any frustrations
    return body
  }

  /**
   *
   * @param {string} body
   * @param {string} url
   */
  hijackScript(body, url) {
    // Make sure the window.rplacebot object exists
    body += "\n;!window.rplacebot && (window.rplacebot = {})"

    // Idk how to explain hopefully you understand what I'm doing here
    // exposee is pronounced "exposé"
    for (const exposee of toExpose) {
      if (exposee.fileRegex.test(url)) {
        body += `\n;window.rplacebot["${exposee.exposeAs}"]=${exposee.name}`
        console.log("Exposed variable/function", exposee.exposeAs)
      }
    }

    // Replace all the things we want replaced (there we go that's a good explanation)
    // replacee is pronounced "replacé"
    for (const replacee of toReplace) {
      if (replacee.regex.test(body)) {
        body = body.replace(replacee.regex, replacee.replacement)
        console.log(
          `Replaced ${replacee.regex} to "${replacee.replacement}" in ${url}`
        )
      }
    }

    return body
  }
}

const bot = new SimpleRplaceBot()
bot.init()
