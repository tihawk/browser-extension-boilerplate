import { Browser, BrowserAction, Action } from "webextension-polyfill"
import { BrowserT } from "./interfaces"
const browser: Browser = require("webextension-polyfill")
const browserType: BrowserT = process.env.BROWSER as BrowserT

/* 
Ever since Manifest version 3, browserAction and pageAction are references as simply action in Chrome API
*/
export function getBrowserAction(): BrowserAction.Static | Action.Static {
    return browserType === 'chrome' ? browser.action : browser.browserAction
}