import { Browser } from "webextension-polyfill"
const browser: Browser = require("webextension-polyfill")

document.getElementById("hello")?.addEventListener('click', sendMessage)

function sendMessage() {
    browser.tabs.query({active: true, currentWindow: true})
        .then(result => {
            browser.runtime.sendMessage(result[0])
        })
}
