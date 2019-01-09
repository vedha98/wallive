const electron = require('electron');
const wallpaper = require('electron-wallpaper')
const { app, BrowserWindow } = require('electron')
let win

function createWindow () {
  const windowProperties = {
              width: 1920,
              height: 1080,
              transparent: true,
              frame: false
            };
win = new BrowserWindow({width: 1920,
height: 1080})
  win1 = new BrowserWindow(windowProperties)

  wallpaper.attachWindow(win1);
  win.loadFile('index.html')
  win1.loadFile('window1.html')


  win.webContents.openDevTools()


  win.on('closed', () => {
    win = null
  })
}


app.on('ready', createWindow)

app.on('window-all-closed', () => {
    app.quit()
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})
