<template>
  <li>
    <label>
      <!--这里勾选和取消勾选可以使用change和click作为事件处理-->
      <input
        type="checkbox"
        :checked="todo.done"
        @change="handleCheck(todo.id)"
      />

      <!--v-model数据的双向绑定，checkbox使用v-model来双向绑定其是否被勾选,也可以实现效果但不推荐(因为其实修改了props中的数据)-->
      <!--这里修改了从List修改过来的props,这里的不允许改是浅层次，就是如果props是一个对象则这个修改这个对象的某一个属性vue是放行的-->
      <!-- <input type="checkbox" v-model="todo.done"/>-->


      <span v-show="!todo.isEdit">{{ todo.title }}</span>


      <!-- 當我們點擊編輯的時候，就使用輸入框來顯示。    -->
      <input
        type="text"
        :value="todo.title"
        v-show="todo.isEdit"
        @blur="handleBlur(todo, $event)"
        ref="inputTitle"
      />
    </label>

    <button class="btn btn-danger" @click="handleDelete(todo.id)">删除</button>

    <button
      v-show="!todo.isEdit"
      class="btn btn-edit"
      @click="handleEdit(todo)"
    >
      编辑
    </button>
  </li>
</template>

<script>
import pubsub from "pubsub-js";

export default {
  name: "Item",
  // 声明接收 todo
  props: ["todo"],
  methods: {
    handleCheck(id) {
      //事件总线
      this.$bus.$emit("checkTodo", id);
    },
    handleDelete(id) {
      if (confirm(`确定删除编号为${id}的todo吗`)) {
        // 事件总线
        // this.$bus.$emit('deleteTodo',id);

        // 消息订阅改写
        pubsub.publish("deleteTodo", id);
      }
    },
    // 编辑
    handleEdit(todo) {
      // 注意这里添加的数据并不是响应式的，所以這裡的數據添加或修改，
      // 都不會引起 Vue 重新解析模板。
      // todo.isEdit = true; // 直接這樣寫是不行的

      // 判斷 todo 身上是否有 isEdit 屬性
      if (Object.prototype.hasOwnProperty.call(todo, "isEdit")) {
        todo.isEdit = true;
      } else {
        // 保证初次加入的时候存在响应式的数据
        // 這樣添加屬性的方式，就會是 Vue 所認可的方式。
        this.$set(todo, "isEdit", true); 
      }

      // 自动获取焦点
      // 此时你这行代码执行了，但是注意 Vue 并没有重新解析模版(input并没有出现在页面上，dom节点并没有被更新)，它一定要等这个回调函数执行完之后才会去重新渲染模版
      // this.$refs.inputTitle.focus(); 
      // 使用 nextTick 来解决
      this.$nextTick(() => {
        // 这里的回调函数注意是在 dom 节点被更新之后才会运行的。
        this.$refs.inputTitle.focus();
      });
    },
    //失去焦点回调
    handleBlur(todo, e) {
      // 文字能夠變成 input 框時，就說明它已經有了 isEdit 屬性。  
      todo.isEdit = false; // 注意我在这里确保你身上一定存在 isEdit 属性。

      if (!e.target.value.trim()) {
        alert("輸入不能為空");
        return;
      }

      // 要拿到新輸入的值  ->  e.target.value
      this.$bus.$emit("updateTodo", todo.id, e.target.value);
    },
  },
};
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

li:hover {
  background: #ddd;
}

li:hover button {
  display: block;
}
</style>