// 引入Vue
import Vue from "vue";

// 引入 vue-resource
import vueResource from 'vue-resource';

// 引入App
import App from './App';

// 关闭Vue的生产提示
Vue.config.productionTip = false;

// 使用 vueResource 插件来发送请求
// 注意要先安裝  ->  npm i vue-resource
Vue.use(vueResource); 

// 創建 vm
new Vue({
    el: '#app',
    render: h => h(App),
    beforeCreate() {
        // 在 Vue 的原型對象上安裝全局事件總線
        Vue.prototype.$bus = this;
    }
});
