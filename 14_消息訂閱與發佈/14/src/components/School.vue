<template>
   <div class="demo">
     <h2>學校名稱:{{  name }}</h2>
     <h2>學校地址: {{ address }}</h2>
   </div>
</template>

<script>
// 引入 pubsub-js，引入的是一個對象。
import pubsub from 'pubsub-js';

export default {
  name: "School",
  data(){
    console.log(this);
    return {
       name: 'wust university',
       address: '武汉科技大学'
    }
  },
  mounted() {
    // console.log('School', this);


    // this.$bus.$on('hello', (data) => {
    //   console.log(`我是School组件,我收到了数据,${data}`);
    // })


    // 订阅消息，隔空对讲机喊话
    this.pubId = pubsub.subscribe('hello',  (name, msg) => { // name 是消息名，msg 才是我們要傳遞的訊息。
      // 注意這裡要寫箭頭函數，因為這樣 this 就會丟失；就會往外找，
      // 此時就會找到 vm，即 this => vm。
      console.log(`有人發布了 hello 消息，回調被執行了，data: ${msg}`);

    });
  },
  beforeDestroy() {
    // this.$bus.$off('hello'); //销毁解绑

    //取消订阅
    pubsub.unsubscribe(this.pubId); 
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

