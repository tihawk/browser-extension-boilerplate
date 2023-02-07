# Boilerplate for Web-Extensions
![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/tihawk/browser-extension-boilerplate/dev/webextension-polyfill?style=flat-square) ![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/tihawk/browser-extension-boilerplate/dev/typescript?style=flat-square) ![GitHub package.json dependency version (dev dep on branch)](https://img.shields.io/github/package-json/dependency-version/tihawk/browser-extension-boilerplate/dev/webpack?style=flat-square)

A TypeScript boilerplate for writing browser extensions for Chrome, Firefox and Edge. Uses webpack to build the finished source.

## Building

The extension can be built for one of the following browsers at a time: Chrome, Firefox, Edge.
1. First time after cloning, run `npm install`
2. Run `npm run build:<browser>` where `<browser>` can be `chrome|firefox|edge`

The bundled files will be located in the `dist/` directory.

## Loading into the browser
After having built the extension for the desired browser, you can run it following the appropriate steps.

### Chrome
1. Navigate to `chrome://extensions/`
2. Switch to **Developer Mode**
3. Load extension by clicking **Load unpacked** and navigating to the `dist/` directory

### Firefox
#### Method 1.
1. Run in firefox with `npm run start:firefox`
#### Method 2.
1. Navigate to `about:debugging#/runtime/this-firefox`
2. Load extension by clicking **Load Temporary Add-on** and navigating to the `dist/` directory

### Edge
1. Navigate to `edge://extensions/`
2. Switch to **Developer Mode**
3. Load extension by clicking **Load unpacked** and navigating to the `dist/` directory

## Licence
<img src="https://img.shields.io/github/license/tihawk/browser-extension-boilerplate?style=flat-square"/>
