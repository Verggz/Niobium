"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const electron_1 = require("electron");
//import * as remoteMain from '@electron/remote/main';
//remoteMain.initialize();
function createWindow() {
    var window = new electron_1.BrowserWindow({
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            webgl: true,
        },
        width: 1280,
        height: 720,
        title: "Niobium 0.0.1"
    });
    window.loadFile("./public/index.html");
    //window.maximize();
    //remoteMain.enable(window.webContents);
}
electron_1.app.whenReady().then(() => {
    createWindow();
});
