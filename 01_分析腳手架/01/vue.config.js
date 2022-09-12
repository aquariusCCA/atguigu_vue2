const { defineConfig } = require('@vue/cli-service')

// 官方的配置參考: https://cli.vuejs.org/zh/config/
// 修改配置文件記得每此都要重啟  ->  npm run serve
module.exports = defineConfig({
  // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。你可以启用本选项，以避免构建后的代码中出现未转译的第三方依赖。
  transpileDependencies: true,

  // 語法檢查時會把不規範的代碼當成錯誤，所以我們這邊將這個功能關閉。
  lintOnSave: false,

  // 每个 "page" 应该有一个对应的 JavaScript 入口文件。其值应该是一个对象，对象的 key 是入口的名字
  // value 是：
  //    1. 一个指定了 entry, template, filename, title 和 chunks 的对象 (除了 entry 之外都是可选的)；
  //    2. 或一个指定其 entry 的字符串
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
    },
  }    
})
