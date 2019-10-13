const { app, BrowserWindow } = require('electron')

let win;

// 创建窗口
function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // 加载主页面
  win.loadFile('index.html')

  // 窗口关闭
  win.on('closed', ()=>{
    win = null
  })

  // 打开调试工具
  win.webContents.openDevTools()
}

// 程序启动
app.on('ready', createWindow)

// 全部窗口关闭
app.on('window-all-closed', ()=>{
  app.quit()
})