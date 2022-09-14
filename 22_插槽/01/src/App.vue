<template>
  <div class="container">
    <Category title="默認"/>

    <Category title="美食">
      <img src="https://www.citibank.com.tw/sim/blog/uploads/images/cms/ckeditor/d813431197cb54fea1204f0a06b65db5.jpg" alt="delicious food" />
    </Category>


    <Category title="遊戲" :listData="games">
      <ul>
        <li v-for="(g, index) in games" :key="index">{{ g }}</li>
      </ul>
    </Category>


    <Category title="電影">
      <video
        src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4"
        controls
      ></video>
    </Category>
  </div>
</template>

<script>
import Category from "@/components/Category";

export default {
  name: "App",
  components: {
    Category,
  },
  data() {
    return {
      foods: ["火鍋", "燒烤", "小龍蝦", "牛排"],
      games: ["紅色警戒", "穿越火線", "勁舞團", "超級瑪莉"],
      films: ["《教父》", "《拆彈專家》", "《你好，明天》", "《尚硅谷》"],
    };
  },
};
</script>
<style lang="css" scoped>
.container {
  display: flex;
  justify-content: space-around;
}
video {
  width: 100%;
}
img {
  width: 100%;
}
</style>


