### scoped 樣式 
其實你在 School.vue 和 Student.vue 裡面所寫的樣式，其實最終都匯總到一起了。既然彙總到一起了，就很容易引起 class 名稱衝突。


1. 作用：让样式在局部生效，防止冲突。


2. 写法：<style scoped>


3. npm 指令補充
    npm view webpack versions

    npm view less-loader versions

    npm i less-loader@7