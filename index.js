// This should be accurate before releasing each new version because if it isn't, and there is an update available, it won't show up in the update div
var appVersion = "1.0.0"

// For app update, if an update is available, the updateAvailable in the RemoteJSON repo will be updated to yes. That will result in the code below being executed
fetch('https://virejdasani.github.io/RemoteJSON/Responsivize/index.html')
    .then((response) => {
        // Returns data in JSON
        return response.json()
    })
    .then((data) => {
        // If update is available, and this version is not the latest one, the update div will no longer be empty. It will have the following HTML
        if (data.updateAvailable == "yes" && data.latestVersion !== appVersion) {
            // Set the innerHTMl of the update div to the contents that the JSON returns
            document.getElementById("update").innerHTML = `
                <div id="update">
                    ${data.updateText}
                    Download update <!-- (${data.latestVersion}) --> <u><a href="${data.updateURL}" target="_blank">here</a></u>
                </div>
            `
        }
    })
    .catch((err) => {
        console.log(err)
    })
