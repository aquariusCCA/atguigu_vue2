<template>
  <div>
    <!--
      以前操作 DOM 的時候都需要先聲明 id -> id="title"
      以前獲取 DOM 的時候如右的操作  -> document.getElementById('title')
      但是我們既然都使用了 Vue 之後，就盡量不要自己去操作 DOM 對象，
      所以 Vue 提供了 ref。(也就是 id 的替代者) 
    -->
    <h1 v-text="msg" ref="title"></h1>

    <button @click="showH" ref="btn">点我输出上方的dom元素</button>

    <School ref="sch" />
  </div>
</template>

<script>
import School from "./components/School";

export default {
  name: "App",
  data() {
    return {
      msg: "欢迎学习Vue",
    };
  },
  methods: {
    showH(e) {
      // $refs: 收集所有聲明 ref 屬性的元素。
      console.log('@', this.$refs);
      

      // this ==> vc (app组件)
      console.log(this.$refs.title); // 真實 DOM 元素
      console.log(this.$refs.btn); // 真實 DOM 元素


      // 可以是 school 组件加 refs 属性，获得的是组件實例对象 vc。
      console.log(this.$refs.sch);  // VC 實例對象


      // 发生事件的 dom 元素 m
      console.log(e.target); 

    },
  },
  components: {
    School,
  },
};
</script>