<template>
  <div>
    <ul>
      <li v-for="m in messageList" :key="m.id">
        <!--- 跳转路由并携带 query 参数，to 的字符串写法 -->
		<!-- 必須使用 `` 模板字符串的方式，否則 "" 裡面的內容會被當成 JS 表達式 -->
        <!-- <router-link :to="`/home/message/detail?id=${m.id}&title=${m.title}`">{{ m.title }}</router-link>&nbsp;&nbsp; -->

        <!---跳转路由并携带query参数，to的对象写法-->
        <router-link
            :to="{
              path:'/home/message/detail',
              query:{
                id: m.id,
                title: m.title
              }
        }">
          {{ m.title }}
        </router-link>&nbsp;&nbsp;
      </li>
    </ul>
    <hr/>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "Message",
  data(){
    return {
      messageList:[
        {id: '001', title: '消息001'},
        {id: '002', title: '消息002'},
        {id: '003', title: '消息003'},
      ]
    }
  }
}
</script>

<style scoped>

</style>