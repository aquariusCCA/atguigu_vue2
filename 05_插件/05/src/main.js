//引入Vue
import Vue from "vue";

//引入App
import App from './App';

//引入插件
import plugins from './plugins';

//关闭Vue的生产提示
Vue.config.productionTip = false;

// vue 应用插件
Vue.use(plugins); 
// 我們還可以傳入參數，這樣就可以傳遞到 plugins.js 中做使用了。
// Vue.use(plugins, 1, 2, 3)


// 創建 vm 實例
new Vue({
    el:'#app',
    render: h => h(App)
});