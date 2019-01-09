const electron = require('electron');
const wallpaper = require('electron-wallpaper')
const { app, BrowserWindow } = require('electron')
function apply(){
  const windowProperties = {
              width: 1920,
              height: 1080,
              transparent: true,
              frame: false
            };
  win1 = new BrowserWindow(windowProperties)

  wallpaper.attachWindow(win1);
  win1.loadFile('window1.html')


}
