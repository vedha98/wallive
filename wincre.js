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
showToast('Wallpaper Set');

}
function detatch(){
if(win1){
  win1.close();
  win1=null;
}
showToast('wallpaper removed');
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
function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}
exports.createMain = function () {
  splash = new BrowserWindow({width: 1920,
  height: 1080,icon: 'icon.png',frame:false,transparent:true})
  splash.loadFile('splash.html')
  setTimeout(function () {
    win = new BrowserWindow({width: 1920,
    height: 1080,icon: 'icon.png'})
    splash.close();
      win.loadFile('index.html')
  win.setMenu(null);
  }, 2000);



};

function showToast(text){
  var toast =  document.getElementById("toastbox");
  var toasttext = document.getElementById('toasttext');
  toasttext.innerHTML=text;
  toast.classList.add('show-toast');
  toast.classList.remove('hide-toast');
  setTimeout(function () {
    toast.classList.add('hide-toast');
    toast.classList.remove('show-toast');
  }, 2000);




}
