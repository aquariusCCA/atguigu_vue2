// index.js 文件用于创建 Vuex 中最为核心的 store
import Vue from 'vue'

//引入Vuex
import Vuex from 'vuex'
import { runtime } from 'webpack'

// 应用 Vuex 插件
// new Vuex.Store() 的前提是必須使用 Vuex 插件。
Vue.use(Vuex)

// 准备 actions -> 用于响应组件中的动作。
const actions = {
	// jia(context, value){
	// 	// context: 就是一個迷你版的 store，官方叫做上下文，
	// 	// 包含 commit 和 dispach 過來的值。
	// 	console.log('actions 中的 jia 被调用了')

	// 	// 一般再開發的過程中這個 jia 要變成都大寫的。(規範)
	// 	context.commit('JIA', value)
	// },
	// jian(context, value){
	// 	console.log('actions 中的 jian 被调用了')
	// 	context.commit('JIAN', value)
	// }, 
	jiaOdd(context,value){
		console.log(' actions 中的 jiaOdd 被调用了')

		if(context.state.sum % 2){
			context.commit('JIA', value)

			// 我們可以在 actions 中調用 dispach
			// context.dispatch('demo1', value)
		}
	},
	jiaWait(context,value){
		console.log('actions 中的 jiaWait 被调用了')

		setTimeout(()=>{
			context.commit('JIA',value)
		},500)
	},
	// 我們可以在 actions 中調用 dispach
	// demo1(context, value){
	// 	console.log('處理了一些事情  --demo1')
	// 	context.dispatch('demo2', value)
	// },
	// demo2(context, value){
	// 	console.log('處理了一些事情  --demo2')
	// 	context.commit('JIA', value)
	// }
}

// 准备 mutations -> 用于操作数据（state )。
const mutations = {
	// 收到 state 和要操作的数 value
	JIA(state, value){
		console.log('mutations 中的 JIA 被调用了')
		state.sum += value
	},
	JIAN(state, value){
		console.log('mutations 中的 JIAN 被调用了')
		state.sum -= value
	}
}

// 准备 state -> 用于存储数据。
const state = {
	sum:0 // 当前的和
}

// 创建并暴露 store
export default new Vuex.Store({
	actions,
	mutations,
	state,
})