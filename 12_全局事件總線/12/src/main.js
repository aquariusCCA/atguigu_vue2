//引入Vue
import Vue from "vue";

//引入App
import App from './App';

//关闭Vue的生产提示
Vue.config.productionTip = false;


// 如下的代碼可以使用 beforeCreate() 做一個巧妙的方法
// 创建一个 vc 實例對象
// Demo 傀儡不需要配置对象
// const Demo = Vue.extend({}); // 此時的 extend() 的返回值就是 VueComponent。
// 此时这个 d 就是组件实例对象 => vc
// 之前我們需要寫組件標籤才會創建 vc 對象，所以我們這邊要手動創建 vc 對象。
// const d = new Demo(); 
// 將這個 d 組件實例對象，添加到 Vue 原型中的 x 屬性中。
// Vue.prototype.x = d;

// 創建 vm 
new Vue({
    el:'#app',
    render: h => h(App),
    beforeCreate() {
        // 此时这个 this 就是 vm，只不过这个时候还并没有去解析模版
        // x 當前的值就是 vm，所以我們也就沒有必要再去創建 vc 實例對象。
        // Vue.prototype.x = this; // 安装全局事件总线


        // 一般來說都不會叫做 x，而是叫做 $bus
        // 1. 為甚麼要加上 $ ? 因為要迎合 Vue 的設計，Vue 提供給程序員的 API，都會有 $。
        // 2. bus 有總線的意思。
        Vue.prototype.$bus = this; // 安装全局事件总线
    }
});

