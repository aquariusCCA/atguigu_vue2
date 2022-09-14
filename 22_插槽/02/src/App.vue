<template>
   <div class="container">
     <Category title="美食">
        <!-- slot: 可以指定要使用哪一個插槽 -->
       <img slot="center" src="https://www.citibank.com.tw/sim/blog/uploads/images/cms/ckeditor/d813431197cb54fea1204f0a06b65db5.jpg" alt="delicious food"/>

       <a slot="footer" href="https://www.baidu.com">百度</a>
     </Category>

     <Category title="遊戲" :listData="games">
       <ul slot="center">
         <li v-for="(g , index) in games" :key="index">{{ g }}</li>
       </ul>

       <div slot="footer" class="foot">
         <a href="https://www.baidu.com">單機遊戲</a>
         <a href="https://www.baidu.com">網路遊戲</a>
       </div>
     </Category>

     <Category title="電影">
       <video slot="center" src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" controls></video>

       <!-- 注意: v-slot 僅僅只能被用在組件上或者 template 標籤上 -->
       <template v-slot:footer>
         <div class="foot">
           <a href="https://www.baidu.com">經典</a>
           <a href="https://www.baidu.com">熱門</a>
           <a href="https://www.baidu.com">推薦</a>
         </div>
         <h4>歡迎來到電影院欣賞</h4>
       </template>
     </Category>
   </div>
</template>

<script>
import Category from "@/components/Category";
export default {
  name: "App",
  components:{
    Category
  },
  data(){
    return {
      foods:['火鍋','燒烤','小龍蝦','牛排'],
      games:['紅色警戒','穿越火線','勁舞團','超級瑪莉'],
      films:['《教父》','《拆彈專家》','《明天，你好》','《尚硅谷》']
    }
  }
}
</script>
<style lang="css" scoped>
   .container, .foot{
     display: flex;
     justify-content: space-around;
   }
   h4{
     text-align: center;
   }
</style>


