//引入Vue
import Vue from "vue";

//引入App
import App from './App';

//引入vue-router
import VueRouter from "vue-router";

//引入路由器
import router from './router';

//关闭Vue的生产提示
Vue.config.productionTip = false;

//应用vue-router插件
Vue.use(VueRouter);

// 創建 vm 
new Vue({
    el: '#app',
    render: h => h(App),
    router
});


