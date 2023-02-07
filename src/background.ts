import { Browser } from "webextension-polyfill"
import { getBrowserAction } from "./util"
import { BrowserT } from "./util/interfaces"
const browser: Browser = require("webextension-polyfill")
const browserType: BrowserT = process.env.BROWSER as BrowserT

console.log('background is a go')

browser.runtime.onMessage.addListener((message, sender) => {
    console.log(sender)
    console.log('button clicked on tab', message)
    browser.tabs.sendMessage(message.id ? message.id : -1, "hello!")
})