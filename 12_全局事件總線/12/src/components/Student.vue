<template>
  <div class="student">
    <h2>姓名:{{ name }}</h2>
    <h2>性别: {{ sex }}</h2>
    <button @click="sendStudentName">把學生名傳遞給 School 組件</button>
  </div>
</template>

<script>
export default {
  name: "Student",
  data() {
    console.log(this);
    return {
      name: "張三",
      sex: "男",
    };
  },
  methods: {
    sendStudentName() {
      // this.x.$emit('hello', this.name);

      this.$bus.$emit("hello", this.name);
    },
  },
  mounted() {
    // console.log(this.x); //vc.__proto__ === VueComponent.protoType VueComponent.protoType.__proto__ === Vue.prototype(完事了)

    console.log("Student", this.x);
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