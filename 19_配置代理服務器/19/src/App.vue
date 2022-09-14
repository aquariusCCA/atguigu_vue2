<template>
  <div>
    <button @click="getStudents">獲取學生信息</button>
    <button @click="getCars">獲取汽車訊息</button>
  </div>
</template>

<script>
// 引入 axios
import axios from "axios";

export default {
  name: "App",
  methods: {
    getStudents() {
      //其实这里就是请求http://localhost:8080/students只不过把请求转移给了端口5001
      axios
        // .get("http://localhost:8080/students") 這是使用方式一
        .get("http://localhost:8080/atguigu/students") // 使用請求前綴
        .then((res) => console.log(res.data))
        .catch((e) => console.log(`msg: ${e.message}, stack: ${e.stack}`));
    },
    getCars() {
      axios
        .get("/demo/cars") //同理
        .then((res) => console.log(res.data))
        .catch((e) => console.log(`msg: ${e.message}, stack: ${e.stack}`));
    },
  },
};
</script>


