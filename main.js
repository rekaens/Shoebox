const { app, BrowserWindow } = require('electron');

let win;

function createWindow() {
    win = new BrowserWindow({
        width: 800,
        height: 600
    });

    if (process.env.DEBUG) {
        win.loadURL('http://localhost:8080').then();
    } else {
        win.loadURL(`file://${__dirname}/dist/index.html`).then();
    }

    win.on('closed', () => {
        win = null;
    });
}

app.on('ready', createWindow);

app.on('windows-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (win === null) {
        createWindow();
    }
});