<template>
   <div class="container">
     <Category title="遊戲">
       <!-- 
        想要使用作用域插槽，外圍必須使用 template 標籤包起來
        ，同時使用 scope 指名引用的數據名稱。 
       -->
       <template scope="{games}">
         <!-- 这里 data 为插槽给你传递的对象包含你所需要的数据，包装成对象的原因就是你当时可能个插槽传递了多个数据-->
         <ul>
           <li v-for="(g , index) in games" :key="index">{{ g }}</li>
         </ul>
         <h4>{{msg}}</h4>
       </template>
     </Category>

     <Category title="遊戲">
       <template scope="scopeDate">
         <!--这里data为插槽给你传递的对象包含你所需要的数据-->
         <ol>
           <li  v-for="(g , index) in scopeDate.games" :key="index">{{ g }}</li>
         </ol>

         <h4>{{scopeDate.msg}}</h4>
       </template>
     </Category>

     <Category title="遊戲">
       <!-- 也可以使用 slot-scope -->
       <template slot-scope="{games}">
         <h4 v-for="(g , index) in games" :key="index">{{ g }}</h4>
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
}
</script>
<style lang="css" scoped>
   .container, .foot{
     display: flex;
     justify-content: space-around;
   }
</style>


