<template>
	<div>
		<h1>當前求和為：{{sum}}</h1>
		<h3>當前求和放大 10 倍為：{{bigSum}}</h3>
		<h3>我在 {{school}}，學習{{subject}}</h3>

		<select v-model.number="n">
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
		</select>
		
		<button @click="increment">+</button>
		<button @click="decrement">-</button>
		<button @click="incrementOdd">當前求和為奇數再加</button>
		<button @click="incrementWait">等一等再加</button>
	</div>
</template>

<script>
	// 從 Vuex 引入兩個東西
	import {mapState, mapGetters} from 'vuex'

	export default {
		name:'Count',
		data() {
			return {
				n:1, //用户选择的数字
			}
		},
		computed:{
			// 靠程序员自己亲自去写计算属性
			// 不同名
			// he(){
			// 	return this.$store.state.sum
			// },
			// xuexiao(){
			// 	return this.$store.state.school
			// },
			// xueke(){
			// 	return this.$store.state.subject
			// },
			// 同名
			// sum(){
			// 	return this.$store.state.sum
			// },
			// school(){
			// 	return this.$store.state.school
			// },
			// subject(){
			// 	return this.$store.state.subject
			// },


			// 借助 mapState 生成计算属性，从 state 中读取数据。（对象写法）
			// 因為 mapState 生成的是對象，而 computed 配置項不能直接編寫對象，
			// 所以我們使用 ... 將對象中的屬性，一一列舉出來。
			// he: 'sum'  ->  計算屬性名稱: $store.state.sum
			// ...mapState({he:'sum', xuexiao:'school', xueke:'subject'}), // 不同名的狀態下。


			// 借助 mapState 生成计算属性，从 state 中读取数据。（数组写法）
			...mapState(['sum', 'school', 'subject']), // 同名的狀態下。


			/* ******************************************************************** */

			/* bigSum(){
				return this.$store.getters.bigSum
			}, */

			// 借助 mapGetters 生成计算属性，从 getters 中读取数据。（对象写法）
			// bigSum: 'bigSum' -> 計算屬性名稱: $store.getters.bigSum
			// ...mapGetters({bigSum: 'bigSum'})
			
			//借助 mapGetters 生成计算属性，从 getters 中读取数据。（数组写法）
			...mapGetters(['bigSum'])

		},
		methods: {
			increment(){
				this.$store.commit('JIA',this.n)
			},
			decrement(){
				this.$store.commit('JIAN',this.n)
			},
			incrementOdd(){
				this.$store.dispatch('jiaOdd',this.n)
			},
			incrementWait(){
				this.$store.dispatch('jiaWait',this.n)
			},
		},
		mounted() { // 這邊是用來測試看看結果的

			// 我們要告訴 Vuex 的是 sum 這個名字，而不是 sum 這個變量。
			// 所以我們需要替 sum 加上 ''(其他的同理)。

			// mapState 生成的是對象 !!!
			const x = mapState({he:'sum', xuexiao:'school', xueke:'subject'})

			console.log(x)
		},
	}
</script>

<style lang="css">
	button{
		margin-left: 5px;
	}
</style>
