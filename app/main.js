const electron = require('electron');

const { app, BrowserWindow, ipcMain } = electron;

let mainWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 680,
    resizable: false,
    fullscreen: true,
    center: true,
    webPreferences: {
      nodeIntegration: true,
    },
  });
  mainWindow.loadURL(`file://${__dirname}/dist/index.html`);
});

ipcMain.on('app:exit', () => app.quit());
