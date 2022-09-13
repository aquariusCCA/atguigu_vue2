<template>
   <div class="student">
     <h2>學生姓名:{{  name }}</h2>
     <h2>學生性別: {{ sex }}</h2>
     <button @click="sendStudentName">把學生名傳遞給 School 組件</button>
   </div>
</template>

<script>
// 引入 pubsub-js，引入的是一個對象。
import pubsub from "pubsub-js";

export default {
  name: "Student",
  data(){
    console.log(this);
    return {
       name: '張三',
       sex: '男',
    }
  },
  methods:{
    sendStudentName(){
      // this.$bus.$emit('hello', this.name);

      // 发布消息
      pubsub.publish('hello', this.name);
    }
  },
}
</script>

<style scoped>
  .student{
    background: orange;
    padding: 5px;
    margin-bottom: 10px;
  }
</style>