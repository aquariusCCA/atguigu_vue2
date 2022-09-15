<template>
	<div>
		<h1>當前求和為：{{sum}}</h1>
		<h3>當前求和放大 10 倍為：{{bigSum}}</h3>
		<h3>我再{{school}}，學習{{subject}}</h3>


		<select v-model.number="n">
			<option value="1">1</option>
			<option value="2">2</option>
			<option value="3">3</option>
		</select>

		<button @click="increment(n)">+</button>
		<button @click="decrement(n)">-</button>
		<button @click="incrementOdd(n)">當前求和為奇數再加</button>
		<button @click="incrementWait(n)">等一等再加</button>
	</div>
</template>

<script>
    // 從 Vuex 中引入 mapState、mapGetters、mapMutations、mapActions
	import {mapState,mapGetters,mapMutations,mapActions} from 'vuex'

	export default {
		name:'Count',
		data() {
			return {
				n:1, //用户选择的数字
			}
		},
		computed:{
			// 借助 mapState 生成计算属性，从 state 中读取数据。（对象写法）
			// ...mapState({he:'sum',xuexiao:'school',xueke:'subject'}),

			// 借助 mapState 生成计算属性，从 state 中读取数据。（数组写法）
			...mapState(['sum','school','subject']),

			/* ******************************************************************** */

			// 借助 mapGetters 生成计算属性，从 getters 中读取数据。（对象写法）
			// ...mapGetters({bigSum:'bigSum'})
			
			//借助 mapGetters 生成计算属性，从 getters 中读取数据。（数组写法）
			...mapGetters(['bigSum'])

		},
		methods: {
			//程序员亲自写方法
			/* increment(){
				this.$store.commit('JIA',this.n)
			},
			decrement(){
				this.$store.commit('JIAN',this.n)
			}, */

			// 借助 mapMutations 生成对应的方法，方法中会调用 commit 去联系 mutations (对象写法)
			// increment 對應的是方法名、'JIA' 對應的是 commit() 函數中的第一個參數。
			// 自動生成的代碼並不知道 this.n 是甚麼東西，所以 Vuex 幫我們傳入的是 event(事件對象)
			// 如果想要獲取 n -> <button @click="increment(n)">+</button>
			...mapMutations({increment:'JIA', decrement:'JIAN'}),

			// 借助 mapMutations 生成对应的方法，方法中会调用 commit 去联系 mutations(数组写法)
			// ...mapMutations(['JIA','JIAN']),

			/* ************************************************* */

			//程序员亲自写方法
			/* incrementOdd(){
				this.$store.dispatch('jiaOdd',this.n)
			},
			incrementWait(){
				this.$store.dispatch('jiaWait',this.n)
			}, */

			// 借助 mapActions 生成对应的方法，方法中会调用 dispatch 去联系 actions (对象写法)
			...mapActions({incrementOdd:'jiaOdd', incrementWait:'jiaWait'})

			// 借助 mapActions 生成对应的方法，方法中会调用 dispatch 去联系 actions (数组写法)
			// ...mapActions(['jiaOdd','jiaWait'])
		},
	}
</script>

<style lang="css">
	button{
		margin-left: 5px;
	}
</style>
