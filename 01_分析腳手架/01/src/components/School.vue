<template>
  <!--  组件的交互-->
  <div class="demo">
    <h2>学校名称:{{ name }}</h2>
    <h2>学校地址:{{ address }}</h2>
    <button @click="showName">点我提示学校名</button>
  </div>
</template>


<style>
    /*css样式*/
    .demo {
    background: skyblue;
    }
</style>


<script>
    // 组件交互的代码
    // 默認暴露
    export default {
        name: "School", // 开发者工具最终呈现的名字为 School
        data() {
            return {
            name: "武汉科技大学",
            address: "武汉",
            };
        },
        methods: {
            showName() {
            alert(this.name);
            },
        },
    };

//     三種暴露方式
// 	1. export const school = Vue.extend({ ... })  ->  分別暴露
//
// 	2. const school = Vue.extend({ ... })
// 	   export { school }  ->  統一暴露
//
// 	3. export default { ... }  ->  默認暴露
//
//  因為之前是需要學習的比較清楚才會加上 Vue.extend({...})
// ，其實 Vue.extend() 是可以省略的，我們只需要傳入配置對象即可。

    // google 關鍵字: ES6 模塊化
    // 原文網址: https://blog.csdn.net/thewar196/article/details/122611955
</script>