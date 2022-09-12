<template>
  <!--  组件的交互-->
  <div>
    <h2>学生姓名:{{ name }}</h2>
    <h2>学生年龄:{{ age }}</h2>
    <button @click="showName">点我提示学生姓名</button>
  </div>
</template>

// 我們也可以不寫 css 


<script>
//组件交互的代码
export default{
  name: "Student", //开发者工具最终呈现的名字为School
  data() {
    return {
      name: "panyue",
      age: 21,
    };
  },
  methods: {
    showName() {
      alert(this.name);
    },
  },
};
</script>