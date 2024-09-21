// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { contextBridge, ipcRenderer } = require('electron')


const maximizeWindow = () => ipcRenderer.send('maximizeWindow');
const isDebug = async () => await ipcRenderer.invoke('getDebugStatus');
contextBridge.exposeInMainWorld('node', {maximizeWindow, isDebug});

document.addEventListener('keydown', function(event) {
    if (event.key === 'F11') {
        event.preventDefault();
        ipcRenderer.send('toggleFullscreen');
    }
});

(async () => {
    if (!(await isDebug())) return;
    console.log("DevTools shortcut enabled.");
    document.addEventListener('keydown', (event) => {
        if (event.ctrlKey && event.key === 'd') {
            ipcRenderer.send('openDevTools');
            return;
        }
    });
})()
