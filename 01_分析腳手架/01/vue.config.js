const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  // 語法檢查時會把不規範的代碼當成錯誤，所以我們這邊將這個功能關閉。
  lintOnSave: false    
})
