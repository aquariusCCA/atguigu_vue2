// 这里引入的是残缺版的 vue，是没有模版解析器，所以是不能写 template 的。(vue.runtime.xxx.js)
import Vue from 'vue' // 引入 vue

// 在腳手架裡面引入組件的時候，.vue 的副檔名可以省略。
import App from './App' // 引入 App 組件


// 设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false


// 創建 vm
new Vue({
  // 由於我們是使用殘缺版的 Vue，所以我們不能使用模板解析器。
  // 這就是為何我們必須使用 render() 函數的原因。
  // template: '<App></App>'

  // vue 传递帮你调 render() 函数，并传递了一个名为 createElement() 的函数；
  // 这里的第一个参数代表 h1 元素(標籤)，第二个参数是 h1 的内容
  // render(createElement){
  //   return createElement(App)
  // }

  // 由於我們的 render() 函數沒有使用到 this，所以我們可以使用箭頭函數。
  // render: (createElement) => {
  //   return createElement(App)
  // }

  // 還可以省略成如下這樣
  // render: createElement => createElement(App)

  // 將 App 組件放入到容器中
  render: h => h(App)  // 最終版本
}).$mount('#app') // $mount('#app') 等於 el: '#app'


/*
  关于不同版本的Vue：
    1. vue.js 与 vue.runtime.xxx.js 的区别：
        (1). vue.js 是完整版的 Vue，包含：核心功能 + 模板解析器。
            備註:
              - 模板解析器佔了 Vue 整個代碼的 1/3 的體積。

        (2). vue.runtime.xxx.js 是运行版的 Vue，只包含：核心功能；没有模板解析器。


    2. 因为 vue.runtime.xxx.js 没有模板解析器，所以不能使用 template 配置项，需要使用
      render 函数接收到的 createElement 函数去指定具体内容。


    3. 為何要有 vue.js(完整版) 与 vue.runtime.xxx.js(精簡版) ?
      開發的時候使用完整版是不會有任何問題的，但是有一天代碼寫完需要交給 webpack 進行打包；
      webpack 打包完之後就會變成一個非常大的資料夾，此時這一包文件夾還是包含著 Vue 的核心功能和模板解析器；
      但是這就會有一個問題，那就是模板解析器不應該被打包進來，因為我們開發的時候，模板解析器應該幫我們解析模板，
      將 .vue 文件翻譯成 .js 文件；但是今天通過 webpack 已經把 .vue 翻譯成 .js ，此時模板解析器就沒有存在的必要了。


*/