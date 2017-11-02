const electron = require('electron');

const { app, BrowserWindow } = electron;


app.on('ready', () => {
  const mainWindow = new BrowserWindow({
    height: 1000,
    width: 1600
  });
  mainWindow.loadURL(`file://${__dirname}/index.html`);
});
