<template>
  <div class="category">
    <h3>{{ title }}</h3>

    <!-- 等著組件的使用者進行填充 -->
    <slot :games="games" msg="hello">
      我是默認值
    </slot>
  </div>
</template>

<script>
export default {
  name: "Category",
  props:[ 'title' ],
  data(){
    return {
      games:['紅色警戒','穿越火線','勁舞團','超級瑪莉'],
    }
  }
}
</script>

<style scoped>
   .category{
     background: skyblue;
     width: 200px;
     height: 300px;
   }
   h3{
     text-align: center;
     background: orange;
   }
</style>