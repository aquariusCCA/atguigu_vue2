import Vue from 'vue' // 引入 vue
// 在腳手架裡面引入組件的時候，.vue 的副檔名可以省略。
import App from './App' // 引入 App 組件


// 设置为 false 以阻止 vue 在启动时生成生产提示。
Vue.config.productionTip = false


// 創建 vm
new Vue({
  render: h => h(App),
}).$mount('#app')
