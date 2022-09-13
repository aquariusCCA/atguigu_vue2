<template>
   <div class="demo">
     <h2>学校名称:{{  name }}</h2>
     <h2>学校地址: {{ address }}</h2>
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
  mounted() {
    console.log('School', this.x);

    // this.x.$on('hello', (data) => {
    //     console.log(`我是 School 組件，收到了數據 ${data}`)
    // })

    this.$bus.$on('hello', (data) => {
      console.log(`我是 School 组件，我收到了数据，${data}`);
    })
  },
  beforeDestroy() {
    // 销毁解绑
    this.$bus.$off('hello'); 
  }
}
</script>

<style scoped>
   /*scoped代表局部的*/
  .demo{
    background: skyblue;
    padding:5px
  }
</style>

