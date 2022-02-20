import {app, BrowserWindow} from 'electron';
//import * as remoteMain from '@electron/remote/main';
//remoteMain.initialize();


function createWindow(){
    var window:BrowserWindow = new BrowserWindow({
        webPreferences:{
            nodeIntegration:true,
            contextIsolation: false,
            webgl:true,
        },
        width:1920,
        height:1080,
        title:"Niobium 0.0.1"
        
    });
    
    window.loadFile("./public/index.html");
    //remoteMain.enable(window.webContents);
}

app.whenReady().then(() =>{
    createWindow();
})