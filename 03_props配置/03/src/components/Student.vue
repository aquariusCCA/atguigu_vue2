<template>
  <div class="demo">
    <h1>{{ msg }}</h1>
    <h2>姓名:{{ name }}</h2>
    <h2>年龄: {{ age + 1 }}</h2>
    <h2>性别: {{ sex }}</h2>

    <!-- 注意 props 传递过来的值是不能改的(尽量避免去改，控制台会有警告) -->
    <button @click="updateName">尝试修改名字</button>
    <h2>要被修改的名字: {{ myName }}</h2>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    console.log(this);
    return {
      //如果props和data存在同名的属性，会报错，但已props传递的属性值为主
      //注意props属性名不能是vue底层已征用的属性名(比如key, ref等等)
      msg: "我是一名普通的大学生",

      // 把 props 传递过来的值当成 vc 的状态，这样改 name 是不会出问题的，因为你没有直接去修改 props
      myName: this.name,
    };
  },

  methods: {
    updateName() {
      // 注意 props 传递过来的值是不能改的(尽量避免去改，控制台会有警告)
      // this.name = "sss";

      // 把 props 传递过来的值当成 vc 的状态，这样改 name 是不会出问题的，因为你没有直接去修改 props
      this.myName = 'sss';
    },
  },

  // 第一种方式（只接收）
  props: ["name", "sex", "age"], // 简单声明接收

  // 第二种方式（限制类型）
  //   props: {
  //     // 限制 props 中属性的类型，类型错误了会提示错误信息
  //     name: String,
  //     sex: String,
  //     age: Number
  //   }

  // 第三种方式（限制类型、限制必要性、指定默认值）
  //   props: {
  //     // 接收时不仅限制类型还加上默认值的指定并指定它的必须性
  //     name: {
  //       type: String, //类型
  //       required: true, //必要的
  //     },
  //     age: {
  //       type: Number,
  //       default: 99, //默认值
  //     },
  //     sex: {
  //       type: String,
  //       required: true,
  //     },
  //   }
};
</script>