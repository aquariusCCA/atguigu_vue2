<template>
  <li>
    <label>
      <!-- 这里勾选和取消勾选可以使用 change 和 click 作为事件处理 -->
      <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>

      <!-- v-model 数据的双向绑定，checkbox 使用 v-model 来双向绑定其是否被勾选, 也可以实现效果但不推荐(因为其实修改了props中的数据) -->
      <!-- 这里修改了从 List 修改过来的 props, 这里的不允许改是浅层次，就是如果 props 是一个对象则这个修改这个对象的某一个属性 vue 是放行的-->
      <!-- <input type="checkbox" v-model="todo.done"/>-->


      <span>{{  todo.title }}</span>
    </label>


    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>
  </li>
</template>

<script>
export default {
  name: "Item",
  // 声明接收 todo 對象
  props: ['todo', 'checkTodo', 'deleteTodo'],
  methods:{
    handleCheck(id){
      // 通知 App 組件將對應的 todo 對象的 done 值取反
      this.checkTodo(id);
    },
    handleDelete(id){
      // 通知 App 組件將對應的 todo 對象刪除  
      if(confirm(`確定要刪除編號為 ${id} 的 todo 嗎 ?`)){
        this.deleteTodo(id);
      }
    }
  }
}
</script>

<style scoped>
/*item*/
li {
  list-style: none;
  height: 36px;
  line-height: 36px;
  padding: 0 5px;
  border-bottom: 1px solid #ddd;
}
li label {
  float: left;
  cursor: pointer;
}
li label li input {
  vertical-align: middle;
  margin-right: 6px;
  position: relative;
  top: -1px;
}
li button {
  float: right;
  display: none;
  margin-top: 3px;
}
li:before {
  content: initial;
}
li:last-child {
  border-bottom: none;
}
li:hover{
  background: #ddd;
}
li:hover button{
  display: block;
}
</style>