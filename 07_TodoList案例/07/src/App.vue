<template>
  <div id="root">
    <div class="todo-container">
      <div class="todo-wrap">
        <MyHeader :addTodo="addTodo"/>

        <List
            :todos="todos"
            :checkTodo="checkTodo"
            :deleteTodo="deleteTodo"
        />

        <MyFooter
            :todos="todos"
            :checkAllTodo="checkAllTodo"
            :clearAllDoneTodo="clearAllDoneTodo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader";
import List from "@/components/List";
import MyFooter from '@/components/MyFooter';

export default {
  name: "App",
  components:{
    List,
    MyFooter,
    MyHeader
  },
  data() {
    return {
      todos: [
        {id: '001', title: '吃飯', done: false},
        {id: '002', title: "睡覺", done: true},
        {id: '003', title: '打代碼', done: false}
      ]
    }
  },
  // 開發心法: 數據在哪裡，操作數據的方法就在哪裡 !!!
  methods:{
    // 添加的 todo
    addTodo(todo){
      // unshift(): 可向数组的开头添加一个或更多元素，并返回新的长度。
      this.todos.unshift(todo);
    },
    // 勾選 or 取消勾選一個 todo
    checkTodo(id){
      // 寫法 1
      // this.todos.forEach((todo) => {
      //   if(todo.id == id){
      //     todo.done = !todo.done
      //   }
      // })


      // 寫法 2
      const todo = this.todos.find(todo => todo.id === id);
      todo.done = !todo.done;
    },
    // 刪除一個 todo
    deleteTodo(id){
      // 過濾掉我們不要的數據，也是一種刪除。
      // filter() 是不會改變的原數組的，它會返回新的數組。
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    // 全選 or 取消全選
    checkAllTodo(done){
      this.todos.forEach(todo => todo.done = done);
    },
    // 清除所有已經完成的 todo
    clearAllDoneTodo(){
      this.todos = this.todos.filter(todo => !todo.done)
    }
  }
}
</script>

<style>
/*base*/
body {
  background: #fff;
}
.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}
.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}
.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}
.btn:focus {
  outline: none;
}
.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>