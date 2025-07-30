import puppeteer, { KnownDevices } from "puppeteer";
import { readFile } from "fs/promises";

const indexJSFile = await readFile("./rplaceIndex.js", { encoding: "utf-8" }); // Load rplaceIndex.js into a variable to quickly get it later
const panelFile = await readFile("./panel.html", "utf-8"); // Load panel.html into a variable to quickly get it later

console.log("Launching browser...");

const browser = await puppeteer.launch({
  headless: false, // Makes the browser a physical window
  //devtools: true,
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
});

const page = await browser.newPage();

await page.setRequestInterception(true); // Will allow us to catch requests

// We can handle certain requests to make the website load how we want
page.on("request", async (request) => {
  if (request.isInterceptResolutionHandled()) return;

  const url = request.url();

  // Block all request containing disable-devtool
  if (/disable-devtool/.test(url)) {
    return request.abort();
  }

  // Add our panel to rplace.live
  // The panel has all the code for pixel placing
  if ("https://rplace.live/" === url || "https://rplace.live" === url) {
    const response = await fetch("https://rplace.live");
    const siteContent = (await response.text()) + panelFile;

    return request.respond({
      status: 200,
      contentType: "text/html",
      body: siteContent,
    });
  }

  /* 
    This is the most important part of the program, where we intercept the request to index.js (index-f482484g.js or some other random characters).
    We do this to inject our own script, where we can change stuff up.
    What we can do is expose certain functions and variables to the global scope, so we can actually use them.
    We have to do this because you cant access them directly through regular JavaScript once they're bundled or minified since everything is inside ES modules.
    Go to the bottom of the file rplaceIndex.js to see what functions we exposed.
  */
  if (/index-.+\.js$/.test(url)) {
    return request.respond({
      status: 200,
      contentType: "application/javascript",
      body: indexJSFile,
    });
  }

  request.continue(); // Continue the request if we don't need to interact with it
});

console.log("Loading page...");

await page.goto("https://rplace.live", {
  // Start loading rplace.live
  timeout: 60000,
  waitUntil: "load",
});
