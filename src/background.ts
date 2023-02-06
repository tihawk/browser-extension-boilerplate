import { Browser } from "webextension-polyfill"
const browser: Browser = require("webextension-polyfill")

console.log('background is a go')

browser.browserAction.onClicked.addListener((tab) => {
    console.log('button clicked on', tab)
    chrome.tabs.sendMessage(tab.id ? tab.id : -1, "hello")
})