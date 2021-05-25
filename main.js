// Modules to control application life and create native browser window
const {
    app,
    BrowserWindow
} = require('electron')

const open = require('open')

function createWindow() {
    const win = new BrowserWindow({
        width: 1228,
        height: 800,
        minWidth: 680,
        minHeight: 620,
        webPreferences: {
            webviewTag: true,
            // This is to zoom out in the app window
            zoomFactor: 0.60
        }
    })

    // and load the index.html of the app.
    win.loadFile('index.html')

    // This opens all links with `target="_blank"` attribute in external browser
    win.webContents.on('new-window', function (event, url) {
        event.preventDefault()
        open(url)
    })

    // Open the DevTools.
    // win.webContents.openDevTools()
}

// When app is ready
app.whenReady().then(() => {
    createWindow()

    app.on('activate', function () {
        // On macOS it's common to re-create a window in the app when the
        // dock icon is clicked and there are no other windows open.
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})