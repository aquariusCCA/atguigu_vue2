//引入Vue
import Vue from 'vue'

//引入App
import App from './App.vue'

//引入插件
import vueResource from 'vue-resource'

// 引入 store
// 如果文件叫做 index.js 時，可以省略不寫，因為默認就是找 index.js
// import store from './store/index'
import store from './store'

//关闭Vue的生产提示
Vue.config.productionTip = false

//使用插件
Vue.use(vueResource)

//创建vm
new Vue({
	el:'#app',
	render: h => h(App),
	store,
	beforeCreate() {
		// 安裝全局事件總線
		Vue.prototype.$bus = this
	}
})
