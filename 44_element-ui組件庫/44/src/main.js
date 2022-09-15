// 引入 Vue
import Vue from 'vue'

// 引入 App
import App from './App.vue'

// 完整引入
// 引入 ElementUI 组件库
// import ElementUI from 'element-ui';

// 引入 ElementUI 全部样式
// import 'element-ui/lib/theme-chalk/index.css';

// 应用 ElementUI
// Vue.use(ElementUI);

// 关闭 Vue 的生产提示
Vue.config.productionTip = false

// 按需引入
import { Button, Row, DatePicker } from 'element-ui';

Vue.component('atguigu-button', Button);
Vue.component('atguigu-row', Row);
Vue.component('atguigu-date-picker', DatePicker);

// 创建 vm
new Vue({
	el:'#app',
	render: h => h(App),
})
