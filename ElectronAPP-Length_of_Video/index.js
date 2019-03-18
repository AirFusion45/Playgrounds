const electron = require('electron')
const { app, BrowserWindow, ipcMain } = electron;
const ffmpeg = require('fluent-ffmpeg');
let mainWindow
app.on('ready', () => {
    console.log(`I am ready @ ${Date()}`)
    mainWindow = new BrowserWindow({}); // main window
    mainWindow.loadURL(`file://${__dirname}/index.html`);
    ipcMain.on('video:submit', (event, path) => {
        console.log(path)
        debugger
        ffmpeg.ffprobe(path, function(err, metadata) {
            console.dir(metadata.format.duration);  
            mainWindow.webContents.send('duration:sent', metadata.format.duration)
        });
    })
})

