//引入Vue
import Vue from "vue";

//引入App
import App from './App';

//关闭Vue的生产提示
Vue.config.productionTip = false;


// 創建 vm 
new Vue({
    el:'#app',
    render: h => h(App),
    // 暴力殺 !!!!!
    // mounted() {
    //     setTimeout(() => {
    //         //注意此时 this 代表 vm
    //         //过三秒自动销毁 vm => root
    //         //销毁后子组件以及子组件身上的自定义事件已经没了
    //         //但是原生事件还是可以被调用，不过已经没用了
    //         this.$destroy();
    //     }, 3000);
    // }
});

