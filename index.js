// This function applies settings to all devices
function calibrateDevice(deviceName) {
    var deviceName = document.getElementById(deviceName)

    deviceName.addEventListener('dom-ready', () => {
        // This is to hide scrollbars in the devices
        deviceName.insertCSS(`
            ::-webkit-scrollbar {
                display: none;
            }
        `)
        deviceName.setZoomFactor(0.6)
    })
}

// Add all devices here
calibrateDevice("iPhoneX")
calibrateDevice("S21Ultra")

// Methods from https://www.electronjs.org/docs/api/webview-tag
// if (webview.isLoading) {
// alert('LOADING')
// }

// webview.openDevTools()

// To go back
// if (webview.canGoBack) {
//     webview.goBack()
// }

// To go forward
// if (webview.canGoForward) {
//     webview.goForward()
// }