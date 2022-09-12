<template>
   <div>
      <h1 class="title">你好啊，我是 App.vue</h1> <hr>
      <Student/> <hr>
      <School/> <hr>
   </div>
</template>

<script>
import Student from "@/components/Student";
import School from "@/components/School";

export default {
  name: "App",
  components:{
    School,
    Student,
  },
}
</script>

<style>
   /*
   全局的样式是不需要加scoped
   全局共享
   */
   .title{
     color: red;
   }
</style>