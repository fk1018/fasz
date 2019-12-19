const {app, BrowserWindow, session} = require('electron');
const ipc = require('electron').ipcMain;
// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let win;

ipc.on('CREATE_BROWSERS', async (event, message) => {
  const opt = JSON.parse(message);
  const amtToCreate = parseInt(opt.amtToCreate);
  for(let i = 0;i<amtToCreate;i++){
    await createWindow(opt);
  }
})

async function createWindow (options) {
  let win2;
  // Create the browser window.
  win2 = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      devTools: false
    }
  })

  session.defaultSession.webRequest.onBeforeSendHeaders((details, callback) => {
    details.requestHeaders['User-Agent'] = options.userAgent;
    callback({ requestHeaders: details.requestHeaders })
  })
  await win2.loadURL(options.url);

  // Emitted when the window is closed.
  win2.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    win2 = null
  })
}

function createMainWindow() {
  // Create the browser window.
  win = new BrowserWindow({
    width: 2153,
    height: 1052,
    webPreferences: {
      nodeIntegration: true,
      devTools:false
    }
  });

  // and load the index.html of the app.
  win.loadFile('index.html');
  // Emitted when the window is closed.
  win.on('closed', () => {
    win = null
  });
}

app.on('ready', createMainWindow)

// Quit when all windows are closed.
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', () => {
  if (win === null) {
    createMainWindow()
  }
});