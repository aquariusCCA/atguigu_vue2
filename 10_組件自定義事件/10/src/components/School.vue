<template>
   <div class="demo">
     <h2>學校名稱:{{  name }}</h2>
     <h2>學校地址: {{ address }}</h2>
     <button @click="sendSchoolName">把學校名傳遞給 App</button>
   </div>
</template>

<script>
export default {
  name: "School",
  data(){
    console.log(this);
    return {
       name: 'wust university',
       address: '武漢科技大學'
    }
  },
  methods:{
    sendSchoolName(){
      this.getSchoolName(this.name);
    }
  },
  props: ['getSchoolName'],
}
</script>

<style scoped>
   /*scoped代表局部的*/
  .demo{
    background: skyblue;
    padding:5px
  }
</style>

