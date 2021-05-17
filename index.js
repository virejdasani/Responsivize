// All devices go in the devices array
var devices = ["#iPhone11Pro", "#iPhone11ProMax"]

let website = "https://test.com"

// For each device, firstly it is calibrated by passing it in the calibrateDevice(deviceName) function
// Then, it's webview src website is applied so all devices run the same website
devices.forEach(element => {
    calibrateDevice(element)
    document.querySelector(element).setAttribute("src", website)
})

// This function applies settings to all devices
function calibrateDevice(deviceName) {
    var deviceName = document.querySelector(deviceName)

    // When the respective devices have been loaded in the dom, firstly, the scrollbars are hidden and then the zoom factor is decreased from the default of 1 to 0.6 to match the zoom out of the app
    deviceName.addEventListener('dom-ready', () => {
        // This is to hide scrollbars in the devices
        deviceName.insertCSS(`
            ::-webkit-scrollbar {
                display: none;
            }
        `)
        // Make the devices 60% their original dimensions
        deviceName.setZoomFactor(0.6)
    })
}



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