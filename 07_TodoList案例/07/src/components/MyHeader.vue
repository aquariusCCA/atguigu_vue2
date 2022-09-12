<template>
  <div class="todo-header">
    <input type="text" placeholder="請輸入你的任務名稱，按回車鍵確認。" v-model="title" @keyup.enter="add"/>
  </div>
</template>

<script>
// nanoid 使用了分別暴露的方式，所以需要以下的方式引入。
// 使用 nanoid 獲取唯一的字符串，它就是迷你版的 UUID。
import { nanoid } from 'nanoid';

export default {
  // 注意不管是你写的 data 也还还是 methods 也好，甚至是 computed 计算属性也好，都会出现在组件事例对象 vc 身上
  // 属性值不能重名
  name: "MyHeader",
  data(){
    return {
      title: ''
    }
  },
  methods:{
    add(){
      // 将用户的输入包装成一个 todo 对象
      console.log(this.title)

      // 數據校驗
      // trim(): 去除前後的空格。
      if(!this.title.trim()) {
        alert('代办事项不能为空')
        return; //输入的代办事项为空则不走下面流程
      }

      const todoObj = {
        id: nanoid(), // 獲取唯一的字符串。
        title: this.title,
        done: false
      }

      this.addTodo(todoObj)

      // 清空輸入的數據
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