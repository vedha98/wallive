const electron = require('electron');
const wallpaper = require('electron-wallpaper')
const { app, BrowserWindow } = require('electron')
const wincre = require('./wincre.js');
let win

function createWindow () {
wincre.createMain();

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
