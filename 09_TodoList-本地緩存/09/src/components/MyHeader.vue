<template>
  <div class="todo-header">
    <input type="text" placeholder="請輸入你的任務名稱，按回車鍵確認" v-model="title" @keyup.enter="add"/>
  </div>
</template>

<script>
import { nanoid } from 'nanoid';
export default {
  //注意不管是你写的data也还还是methods也好，甚至是computed计算属性也好都会出现在组件事例对象vc身上
  //属性值不能重名
  name: "MyHeader",
  data(){
    return {
      title: ''
    }
  },
  methods:{
    add(){
      //将用户的输入包装成一个todo对象
      console.log(this.title)

      if(!this.title.trim()) {
        alert('代辦事項不能為空')
        return; //输入的代办事项为空则不走下面流程
      }

      const todoObj = {
        id: nanoid(),
        title: this.title,
        done: false
      }

      // 將新增的代辦事項添加到數組中
      this.addTodo(todoObj)

      // 清空輸入框的數據。
      this.title = '';
    }
  },
  props:['addTodo'],
}
</script>

<style scoped>
/*header*/
.todo-header input {
  width: 560px;
  height: 28px;
  font-size: 14px;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 4px 7px;
}

.todo-header input:focus {
  outline: none;
  border-color: rgba(82, 168, 236, 0.8);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>