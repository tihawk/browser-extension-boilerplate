import { Browser } from "webextension-polyfill"
import { getBrowserAction } from "./util"
import { BrowserT } from "./util/interfaces"
const browser: Browser = require("webextension-polyfill")
const browserType: BrowserT = process.env.BROWSER as BrowserT

console.log('background is a go')

getBrowserAction().onClicked.addListener((tab) => {
    console.log('button clicked on tab', tab)
    browser.tabs.sendMessage(tab.id ? tab.id : -1, "hello")
})