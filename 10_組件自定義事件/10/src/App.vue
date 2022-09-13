<template>
  <div class="app">
    <h1>{{ msg }}, 学生姓名是: {{ studentName }}</h1>
 

    <!-- 通过父组件给子组件传递函数类型的 props 实现了子给父传递数据 -->
    <School :getSchoolName="getSchoolName" />


    <!-- 通过绑定一个自定义事件实现了子给父传递数据(自定义事件绑在子组件上) -->
    <!-- 第一种写法使用 @ 或 v-on -->
    <!-- <Student v-on:atguigu="getStudentName"/> -->


    <!-- 第二种写法使用 ref 绑定事件 -->
    <!-- <Student ref="student"/> -->


    <!-- 示範綁定多個事件，和解綁多個事件 -->
    <!-- <Student @atguigu="getStudentName" @demo="demo"/> -->


    <!-- 
      組件除了可以使用自定義事件之外，是可以使用原生事件；
      但是要加上 native 修飾符，此時就會使用原生事件。
    -->
    <Student ref="student" @click.native="show" />

  </div>
</template>

<script>
import Student from "@/components/Student";
import School from "@/components/School";

export default {
  name: "App",
  components: {
    School,
    Student,
  },
  data() {
    return {
      msg: "hello こんにちは",
      studentName: "",
    };
  },
  methods: {
    getSchoolName(name) {
      console.log(`app 收到了學校名，${name}`);
    },
    getStudentName(name){ // 接收一個型參
      // 這裡的 this 指的是 vm
      this.studentName = name;
      console.log(`app 收到了學生名: ${name}`)
    },
    // getStudentName(name, ...params) { // 接收多個型參
    //   這裡的 this 指的是 vm
    //   this.studentName = name;
    //   console.log(`app收到了学生名, ${name}`);
    //   console.log(`剩余参数, ${params}`);
    // },
    demo(name) {
      console.log("demo事件被触发了", name);
    },
    show() {
      console.log(`123`);
    },
  },
  mounted() {
    // 可以通过 $refs 拿到组件实例对象
    setTimeout(() => {
      // 当 App 组件一挂载完毕，经过三秒我就在 Student 组件上绑定事件
      // $on 監聽當前實例上的自定義事件。
      this.$refs.student.$on('atguigu', this.getStudentName); 

      // 注意此时事件只执行一次就不执行了。(once)一次性
      // this.$refs.student.$once('atguigu', this.getStudentName); 
    }, 3000)


    
    // 如果將 getStudentName() 函數裡面的內容移動到這裡，當我們想要為 studentName 賦值
    // 要特別注意的是此時的 this 指的是 VC，因為 Vue 的底層是這樣設計的，誰觸發了 atguigu 事件，
    // 這個 this 指的就是誰，而觸發事件的是 Student 組件實例對象，this 指的就是 VC。
    // this.$refs.student.$on("atguigu", (name) => { // 注意这里回调要写成剪头函数，因為 this 会丢失, 接著就會往外找 this，此時找到的这个 this 就是 (vm) app，而不是(vc)student
    //   console.log(this);
    //   console.log(name);
    //   this.studentName = name;
    // });
  },
};
</script>

<style>
/*
   全局的样式是不需要加scoped
   全局共享
   */
.app {
  background: gray;
  padding: 5px;
}
</style>

