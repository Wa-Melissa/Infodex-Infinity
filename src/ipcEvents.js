module.exports = (contextBridge) => {
	contextBridge.ipcMain.on('maximizeWindow', () => {
		if (contextBridge.mainWindow.isFullScreen()) return;
		contextBridge.mainWindow.maximize();
	});
	  
	contextBridge.ipcMain.on('toggleFullscreen', () => {
		if (contextBridge.mainWindow.isFullScreen()) return (contextBridge.mainWindow.setFullScreen(false), contextBridge.mainWindow.maximize());
		contextBridge.mainWindow.setFullScreen(true);
	});
	  
	contextBridge.ipcMain.on('openDevTools', () => {
		contextBridge.mainWindow.webContents.openDevTools({ mode: 'detach' });
	})
	  
	contextBridge.ipcMain.handle('getDebugStatus', async () => contextBridge.debug);
	  
	contextBridge.ipcMain.on("quitApp", () => contextBridge.app.quit());
}