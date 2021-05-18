var urlInputField = document.getElementById("urlInput")
var website = document.getElementById("urlInput").value
let goButton = document.getElementById("goButton")

// All devices go in the devices array
let devices = ["#iPhone11Pro", "#iPhone11ProMax", "#samsungGalaxyA51", "#pixel5"]

website = `https://www.test.com`

// For each device, firstly it is calibrated by passing it in the calibrateDevice(deviceName) function
// Then, it's webview src website is applied so all devices run the same website
function loadSiteToDevices() {
    devices.forEach(element => {
        calibrateDevice(element)
        document.querySelector(element).setAttribute("src", website)
    })
}
loadSiteToDevices()

// Set the value in the urlInput field to the website that is being rendered on the devices
// document.querySelector("#urlInput").setAttribute("value", website)

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
        // Make the devices zoom factor 60% of their original to match the zoom out done in main.js to the app window
        deviceName.setZoomFactor(0.6)
    })
}

// When enter is pressed from the urlInput field
goButton.addEventListener("click", (event) => {
    // Don't reload the app window
    event.preventDefault()

    // Get the value from the urlInput field 
    website = document.getElementById("urlInput").value

    // This removes focus from the input field so the cursor doesn't keep blinking when not typing in the field
    urlInputField.blur()
    
    // Load the site to the devices
    loadSiteToDevices()
})


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