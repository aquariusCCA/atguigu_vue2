<template>
  <!--隐式类型转换-->
  <div class="todo-footer" v-show="total">
    <label>
      <!-- <input type="checkbox" :checked="isAll" @change="checkAll"/> -->

      <!-- 如上的代碼也可用 v-model 来替代，此时不需要计算属性了-->
      <input type="checkbox" v-model="isAll" />
    </label>

    <span>
       <span>已完成{{ doneTotal }}</span> / 全部{{total}}
    </span>

    <button class="btn btn-danger" @click="clearAll">清除已完成任务</button>
  </div>
</template>
<script>
export default {
  name: "MyFooter",
  props: ['todos', 'checkAllTodo', 'clearAllDoneTodo'],
  computed:{
    total(){
      return this.todos.length;
    },
    doneTotal(){
      // 方式 1
      return this.todos.reduce((todoTotal, todo) => {
        //隐式类型转换
        return todoTotal + todo.done;
      }, 0);

      // 方式 2
      // return this.todos.filter(todo => todo.done).length;
    },
    isAll:{
      get(){
        return this.total === this.doneTotal && this.doneTotal > 0; // 计算属性可以通过其他的计算属性接着进行计算得到结果
      },
      set(value){
        //value注意要么为true，要么为false，因为你是把它应用在了checkbox上
        this.checkAllTodo(value);
      }
    }
  },
  methods:{
    // checkAll(e){
    //   // console.log(e.target.checked); //判断这个checkbox到底是不是全选 true全选 false全不选
    //   this.checkAllTodo(e.target.checked);
    // }
    clearAll(){
       this.clearAllDoneTodo();
    }
  }
}
</script>

<style scoped>
/*footer*/
.todo-footer {
  height: 40px;
  line-height: 40px;
  padding-left: 6px;
  margin-top: 5px;
}

.todo-footer label {
  display: inline-block;
  margin-right: 20px;
  cursor: pointer;
}

.todo-footer label input {
  position: relative;
  top: -1px;
  vertical-align: middle;
  margin-right: 5px;
}

.todo-footer button {
  float: right;
  margin-top: 5px;
}
</style>