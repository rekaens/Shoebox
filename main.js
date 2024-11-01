// Main Process
const { app, BrowserWindow, ipcMain, Notification } = require("electron");
const path = require("path");

const isDev = !app.isPackaged;

function createWindow() {
    const window = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
            nodeIntegration: false,
            worldSafeExecuteJavaScript: true,
            contextIsolation: true,
            preload: path.join(__dirname, "preload.js"),
        },
    });

    window.loadFile("index.html");

    isDev && window.webContents.openDevTools();
}

if (isDev) {
    require("electron-reloader")(module, {
        debug: true,
        watchRenderer: true,
    });
}

app.whenReady().then(createWindow);

ipcMain.on("notify", (e, message) => {
    new Notification({
        title: "New Notification",
        body: message,
    }).show();
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});

app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
});
