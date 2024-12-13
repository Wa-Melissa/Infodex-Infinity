module.exports = (contextBridge) => {
	contextBridge.ipcMain.on('maximizeWindow', () => { //IPC (Node <-> IEC) - Event handler to maximize main electron window
		if (contextBridge.mainWindow.isFullScreen()) return;
		contextBridge.mainWindow.maximize();
	});
	  
	contextBridge.ipcMain.on('toggleFullscreen', () => { //IPC (Node <-> IEC) - Event handler to toggleFullscreen
		if (contextBridge.mainWindow.isFullScreen()) return (contextBridge.mainWindow.setFullScreen(false), contextBridge.mainWindow.maximize());
		contextBridge.mainWindow.setFullScreen(true);
	});
	  
	contextBridge.ipcMain.on('openDevTools', () => { //IPC (Node <-> IEC) - Event handler to open V8 development tools
		contextBridge.mainWindow.webContents.openDevTools({ mode: 'detach' });
	})
	  
	contextBridge.ipcMain.handle('getDebugStatus', async () => contextBridge.debug);  //IPC (Node <-> IEC) - Event handler to send current debug mode status
	  
	contextBridge.ipcMain.on("quitApp", () => contextBridge.app.quit()); //IPC (Node <-> IEC) - Event handler to quit the app (from nodejs control over electron)
}