const webview = document.querySelector('webview')

// When webview is loaded
webview.addEventListener('dom-ready', () => {
    // https://www.electronjs.org/docs/api/webview-tag

    // This is to hide scrollbars in the devices
    webview.insertCSS(`
    ::-webkit-scrollbar {
        display: none;
    }
`)

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

    // webview.setZoomFactor(0.5)


})