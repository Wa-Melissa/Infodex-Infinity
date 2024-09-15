// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts
const { contextBridge, ipcRenderer } = require('electron')

document.addEventListener('keydown', function(event) {
    if (event.key === 'F11') {
        event.preventDefault();
        ipcRenderer.send('toggleFullscreen');
    }
});

const maximizeWindow = () => {
    ipcRenderer.send('maximizeWindow');
}
contextBridge.exposeInMainWorld('node', {maximizeWindow})