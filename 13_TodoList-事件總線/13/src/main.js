//引入Vue
import Vue from "vue";

//引入App
import App from './App';

//关闭Vue的生产提示
Vue.config.productionTip = false;

// 創建 vm
new Vue({
  el: '#app',
  render: h => h(App),
  beforeCreate() {
    // 在 Vue 的原型對象中安裝事件總線。
    Vue.prototype.$bus = this;
  }
});
