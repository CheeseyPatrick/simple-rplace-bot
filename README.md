# Simple Rplace Bot

## About

This is a helper tool for `rplace.live`. It **does not create a full bot** by itself, but it **exposes the variables and functions you need** to build one.

---

## Setup

1. Make sure you have [Node.js and npm installed](https://nodejs.org/en/).
2. Clone this repository:

   ```bash
   git clone <repo-url>
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Start the browser:

   ```bash
   npm run dev
   ```

5. You will be redirected to `rplace.live`. Wait a few seconds for the Cloudflare challenge to complete. If the "Verify you are human" box does not clear automatically, click it manually.
6. Once verified, click **"Start operation"** on the panel in the top-right of the page.

---

## How It Works

This tool uses **Puppeteer** to launch a browser and expose two important variables for interacting with the rplace server via IPC. It also applies tweaks to ensure the site loads properly.

The two main exposed variables are:

1. **`wsCapsule`**
   A **Web Worker** that contains the WebSocket used to communicate with `server.rplace.live`.

   - The WebSocket is wrapped in a worker to make it harder to access, but this script exposes it for easy use.

2. **`sendIpcMessage`**
   A **function** for sending messages to the server. It takes three arguments:

   - **Argument 1:** the `wsCapsule` object
   - **Argument 2:** the "call" to the server, e.g., `"putPixel"`
   - **Argument 3:** an object containing the data to send

> For more information on `sendIpcMessage`, you can snoop around [rplace GitHub repository](https://github.com/rplacelive/).

All exposed variables are stored in `window.rplacebot`.

---

## Example

Open your browser's console and try:

```javascript
const { wsCapsule, sendIpcMessage } = window.rplacebot

// Place a white pixel at (0, 0)
sendIpcMessage(wsCapsule, "putPixel", { position: 0, colour: 0 })
```

You should see a white pixel appear at `(0, 0)`!

**Notes:**

- `position: 0` → corresponds to coordinates `(0, 0)` on the canvas.
- `colour: 0` → corresponds to white.
  _(Yes, you have to use the British spelling: `colour`.)_

Try another color:

```javascript
sendIpcMessage(wsCapsule, "putPixel", { position: 0, colour: 8 })
```

- This should place a navy blue pixel at `(0, 0)`.

You can now experiment with **different positions and colors**, giving you full control over your IPC calls.

---

## Support

If you need more help, contact **Drogo** on Discord:
`drogojabbakajb#0000`

Happy botting! 😃

---

> **Disclaimer:** Portions of this README were assisted by [ChatGPT](https://chat.openai.com) to improve clarity and readability.
