<template>
  <div>
    <!--- 多个 vc 互不影响 -->

    <!-- 
      :age="12"  也就是 v-bind:age="12" (如下)
      v-bind 的作用重要，获取后面表达式值的赋给 props 的属性 
    -->
    <Student name="panyue" sex="男" :age="12" /> <hr>


    <!-- 如下這樣寫是會傳字符串類型的 25 給 Student 組件 -->
    <!-- <Student name="xiaokevin" sex="男" age="25" /> <hr> -->


    <Student name="xiaokevin" sex="男"/>
  </div>
</template>

<script>
import Student from "@/components/Student";

export default {
  name: "App",
  components: {
    Student,
  },
};
</script>