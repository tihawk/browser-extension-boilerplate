import { Browser } from "webextension-polyfill"
const browser: Browser = require("webextension-polyfill")

console.log('go go go')

browser.runtime.onMessage.addListener((req, sender, sendRes) => {
    console.log('received message from', sender)
    alert(req)
})
