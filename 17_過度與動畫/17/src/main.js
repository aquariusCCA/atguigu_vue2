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
        //事件总线
       Vue.prototype.$bus = this;
    }
});
