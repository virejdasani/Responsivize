const iPhoneX = document.getElementById('iPhoneX')

// When webview is loaded
iPhoneX.addEventListener('dom-ready', () => {
    // This is to hide scrollbars in the devices
    iPhoneX.insertCSS(`
        ::-webkit-scrollbar {
            display: none;
        }
    `)
    iPhoneX.setZoomFactor(0.6)
})

const S21Ultra = document.getElementById('S21Ultra')

S21Ultra.addEventListener('dom-ready', () => {
    // This is to hide scrollbars in the devices
    S21Ultra.insertCSS(`
        ::-webkit-scrollbar {
            display: none;
        }
    `)
    S21Ultra.setZoomFactor(0.6)
})

// function deviceSettings(deviceName, zoomFactor, cssToInsert) {
//     const deviceName = document.getElementById(deviceName)
//     S21Ultra.addEventListener('dom-ready', () => {
//         // This is to hide scrollbars in the devices
//         S21Ultra.insertCSS(`
//             ::-webkit-scrollbar {
//                 display: none;
//             }
//         `)
//         S21Ultra.setZoomFactor(0.6)
//     })
// }

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