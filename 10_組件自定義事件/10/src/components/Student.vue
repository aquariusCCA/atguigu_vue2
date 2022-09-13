<template>
  <div class="student">
    <h2>學生姓名:{{ name }}</h2>
    <h2>學生性别: {{ sex }}</h2>

    <button @click="sendStudentName">把學生名傳遞給 App</button>
    <button @click="unbind">解綁自定義 atguigu 事件</button>
    <button @click="death">銷毀當前 Student 組件的實例對象</button>

    <h2>當前求和為 :{{ number }}</h2>
    <button @click="add">點我 +1 </button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    console.log(this);
    return {
      name: "张三",
      sex: "男",
      number: 0
    };
  },
  methods: {
    add(){
      console.log(`add回调被调用了`);
      this.number ++;
    },
    sendStudentName() {
      console.log("sendStudentName");
      // Vue 組件的 props 是單向數據流，所以只能從上傳到下，
      // 要由下傳到上的話要使用 $emit 自訂事件
      // 第一個參數是事件名稱、後面的參數都是要傳遞的參數(可以很多個)
      this.$emit("atguigu", this.name); // 觸發 Student 組件實例身上的 atguigu 事件。

      // emit 触发绑定在指定 vc 上的自定义事件，vc实例对象可以使用该方法
      // 后面多余参数演示 ES6 的参数收集。
      // this.$emit('atguigu', this.name, 666, 777, 888);

      // this.$emit('demo'); // 同时触发两个事件


      // this.$emit('click'); 如果在组件身上使用原生事件不加native修饰符则会让vue认为你这是自定义事件
    },
    unbind() { // 解绑事件
      // 这种写法只能解绑一种自定义事件
      this.$off("atguigu");

      // 解绑多个事件，参数为包含多个事件名的数组
      // this.$off([ 'atguigu', 'demo' ]);

      // 比较暴力，有几个自定义事件就全给你解绑了   
      // this.$off(); 
    },
    death(){
      // 销毁当前组件实例，销毁后所有该实例的自定义事件都不奏效了
      this.$destroy(); 
    }
  },
};
</script>

<style scoped>
.student {
  background: orange;
  padding: 5px;
  margin-bottom: 10px;
}
</style>