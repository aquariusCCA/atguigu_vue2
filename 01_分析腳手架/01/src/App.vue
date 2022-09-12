<template>
    <!-- 
        模板裡面一定要有一個根元素，template 不是根標籤。
    -->
   <div>
     <School></School>
     <Student></Student>
   </div>
</template>

<script>
// 開發中會創建一個 app 組件，用於管理所有組件。
// 在腳手架裡面引入組件的時候，.vue 的副檔名可以省略。
import School from './components/School';
import Student from './components/Student';

export default {
  name: "App",
  // 汇总所有的组件
  components:{
    Student,
    School
  }
}
</script>
