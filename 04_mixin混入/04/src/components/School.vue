<template>
  <div>
    <h2 @click="showName">学校名称:{{ name }}</h2>
    <h2>学校地址: {{ address }}</h2>
    <h2>x 的值是: {{ x }}</h2>
    <h2>y 的值是: {{ y }}</h2>
  </div>
</template>

<script>
//引入混合
import { mixin, shareData } from "../mixin";

export default {
  name: "School",
  data() {
    console.log(this);
    return {
      name: "wust",
      address: "武汉科技大学",
    };
  },
  // 使用混和
  mixins: [mixin, shareData],
};
</script>