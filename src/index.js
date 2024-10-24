const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('node:path');
const isPackaged = require('electron-is-packaged').isPackaged;
const fs = require("fs");
const JSON5 = require("json5");

//Configuring app (Chromium switches)
Object.entries(JSON5.parse(fs.readFileSync(path.join(__dirname, 'chromium.config.jsonc')))).map(([k,v]) => app.commandLine.appendSwitch(k, v)) 

// Handle creating/removing shortcuts on Windows when installing/uninstalling.
if (require('electron-squirrel-startup')) {
	app.quit();
}

const debug = process.argv[2] == "--debugmode" && !isPackaged;
let mainWindow;
const createWindow = () => {
	// Create the browser window.
	mainWindow = new BrowserWindow({
		width: 1000,
		height: 600,
		disableHtmlFullscreenWindowResize: true,

		webPreferences: {
			preload: path.join(__dirname, 'preload.js'),
			nodeIntegration: true,
			nodeIntegrationInWorker: true,
			spellcheck: false
		},
	});

	// and load the index.html of the app.
	mainWindow.loadFile(path.join(__dirname, debug ? 'www/login/page.html' :'www/splash/loader.html'));
	if (debug) mainWindow.maximize();
	// Remove top bar
	mainWindow.setMenu(null);

	//Prevents users from navigating in history
	mainWindow.webContents.navigationHistory.canGoBack(false);
	mainWindow.webContents.navigationHistory.canGoForward(false);

	require("./ipcEvents.js")({mainWindow, ipcMain, debug, app});
};

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
	createWindow();

	// On OS X it's common to re-create a window in the app when the
	// dock icon is clicked and there are no other windows open.
	app.on('activate', () => {
		if (BrowserWindow.getAllWindows().length === 0) {
			createWindow();
		}
	});
});

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});