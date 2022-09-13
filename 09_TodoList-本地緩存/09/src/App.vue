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
      // 以前的版本
      // todos: [
      //   {id: '001', title: '吃饭', done: false},
      //   {id: '002', title: "睡觉", done: true},
      //   {id: '003', title: '打代码', done: false}
      // ]


      // 跟以前版本多了如下的代碼。
      // 數組的初始值是空數組，所以我們這裡需要做一個判斷。
      // 如果數組為真我就用，數組為假我就不用。(因為 null都会转换为 false)
      todos:JSON.parse(localStorage.getItem('todos')) || []
    }
  },
  methods:{
    //添加的todo
    addTodo(todo){
      console.log('我是app组件，我收到了数据');
      this.todos.unshift(todo);
    },
    checkTodo(id){
      const todo = this.todos.find(todo => todo.id === id);
      todo.done = !todo.done;
    },
    deleteTodo(id){
      this.todos = this.todos.filter(todo => todo.id !== id);
    },
    checkAllTodo(done){
      this.todos.forEach(todo => todo.done = done);
    },
    clearAllDoneTodo(){
      this.todos = this.todos.filter(todo => !todo.done)
    }
  },
  watch:{ // 跟之前的版本多了這個配置項。
    //深度监视 todos
    todos: {
      // 深度監視: 當我監視數組中的對象的某個屬性的變化，他也會產生反應。
      deep: true, 
      handler(newValue) {
        // 本地存储存的是 key 和 value 都是字符串，
        // 所以我們需要將 todos 數組轉換成 JSON字符串。
        localStorage.setItem("todos", JSON.stringify(newValue)) // 將數據存放在本地存儲中
      }
    },
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

