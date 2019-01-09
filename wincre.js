const electron = require('electron');
const wallpaper = require('electron-wallpaper')
const { app,BrowserWindow} = require('electron')

let win1,win
function apply(param){
  const Brows = electron.remote.BrowserWindow
  const windowProperties = {
              width: 1920,
              height: 1080,
              transparent: true,
              frame: false,

            };
            if(!win1){

            win1 = new Brows(windowProperties)
            }


  wallpaper.attachWindow(win1);
  switch(param){
case "heart":
  win1.loadFile('window1.html');
  break;
  case "bandit":
    win1.loadFile('bandit.html');
      break;
  default:
  break;
  }



}
function detatch(){
if(win1){
  win1.close();
  win1=null;
}

}

function createCustom(){
hideMain();
showCustom();
}
function hideMain() {
  var main = document.getElementById("main")
  main.style.display='none';
}
function showCustom() {

}
exports.createMain = function () {
  win = new BrowserWindow({width: 1920,
  height: 1080,icon: 'icon.png'})

    win.loadFile('index.html')
win.setMenu(null);



    win.on('closed', () => {
      win = null
    })
};
