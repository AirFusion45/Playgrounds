const electron = require('electron')
const { app, BrowserWindow } = electron;

app.on('ready', () => {
    console.log(`I am ready @ ${Date()}`)
    new BrowserWindow({}); // main window
})

