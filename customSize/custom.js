var urlInputField = document.getElementById("urlInput")
var website = document.getElementById("urlInput").value
let goButton = document.getElementById("goButton")

// All devices go in the devices array
let devices = ["#device"]

website = `https://virejdasani.github.io/Responsivize/`


loadSiteToDevices()

// Set the value in the urlInput field to the website that is being rendered on the devices
document.querySelector("#urlInput").setAttribute("value", website)

// When enter is pressed from the urlInput field
goButton.addEventListener("click", (event) => {
    // Don't reload the app window
    event.preventDefault()

    // Get the value from the urlInput field
    inputtedUrl= document.getElementById("urlInput").value
    // Add `https://` to URL when the inputted URL is without `https://`
    website = normalizeUrl(inputtedUrl)
    // Let URL have `https://` after searching when the inputted URL is without `https://`
    document.querySelector("#urlInput").value = website

    // This removes focus from the input field so the cursor doesn't keep blinking when not typing in the field
    urlInputField.blur()

    // Load the site to the devices
    loadSiteToDevices()

    // Show the dimension based on input
    displayDimensions()
})

//                                      FUNCTIONS                                      //
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

        // For the back button
        document.getElementById("backButton").addEventListener("click", () => {
            // If can go back, then go back
            if (deviceName.canGoBack) {
                deviceName.goBack()
            } else {
                // For some reason, anything put in here has no effect
            }
        })

        // For the forward button
        document.getElementById("forwardButton").addEventListener("click", () => {
            // If can go forward, then go forward
            if (deviceName.canGoForward) {
                deviceName.goForward()
            } else {
                // For some reason, anything put in here has no effect
            }
        })

        // To reload the webviews
        document.getElementById("reloadButton").addEventListener("click", () => {
            // Reload
            deviceName.reload()
        })

        // For the back button
        document.getElementById("homeButton").addEventListener("click", () => {
            // Go to index.html
            location.href = '../index.html'
        })
    })
}

// Add `https://` to URL when the inputted URL is without `https://`
function normalizeUrl(url) {
    return (url.includes('http')? url : 'https://' + url)
}

// For each device, firstly it is calibrated by passing it in the calibrateDevice(deviceName) function
// Then, it's webview src website is applied so all devices run the same website
function loadSiteToDevices() {
    devices.forEach(element => {
        calibrateDevice(element)
        document.querySelector(element).setAttribute("src", website)
    })
}

function displayDimensions() {
    // Resizing div
    var dimensInput = document.getElementById("dimensInput").value.toLowerCase()
    var resizeDiv = document.getElementById("resize")

    var width = dimensInput.split("x")[0]
    var height = dimensInput.split("x")[1]

    resizeDiv.style.setProperty("width", width+"px")
    resizeDiv.style.setProperty("height", height+"px")
}

// This function gets the size of the resize div recursively every 2 seconds and sets it to deviceText and dimensInput field
function resizeToShowDimensions() {
    var resizeDiv = document.getElementById("resize")
    let dimensInput = document.getElementById("dimensInput")
    height = resizeDiv.offsetHeight
    width = resizeDiv.offsetWidth

    // Show the height and width in the device text
    deviceText.innerHTML = width + "x" + height
    dimensInput.value = width + "x" + height
}

// Every time it is resized, the dimensions get updated
document.getElementById("device").addEventListener("resize", resizeToShowDimensions)

//                                      FUNCTIONS                                      //