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
        // 在 Vue 原型對象上，安裝全局事件總線。
        Vue.prototype.$bus = this;
    }
});
