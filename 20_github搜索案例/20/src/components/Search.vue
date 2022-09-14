<template>
  <section class="jumbotron">
    <h3 class="jumbotron-heading">Search Github Users</h3>

    <div>
      <input
        type="text"
        placeholder="enter the name you search"
        v-model="keyword"
      />&nbsp;
      <button @click="searchUsers">Search</button>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "Search",
  data() {
    return {
      keyword: "",
    };
  },
  methods: {
    // 使用全局事件總線在組件間傳遞數據
    searchUsers() {
      // 請求之前更新 List 的數據
      this.$bus.$emit("updateListData", {
        isFirst: false,
        isLoading: true, // 此時正在查詢數據，還沒有將數據返回給用戶，此時可以提示加載中。
        errMsg: "",
        users: [],
      });

      axios
        .get(`https://api.github.com/search/users?q=${this.keyword}`)
        .then((res) => { // 請求成功後更新 List 數據
          console.log(res.data.items);

          // 傳遞數據的人，寫一個方法，並在裡面觸發事件，將數據傳遞回去。
          this.$bus.$emit("updateListData", {
            // isFirst: false, // 因為我們在請求之前就將 isFirst 更改為 false 了，所以我們這邊就不需要再調整了。
            isLoading: false, // 當用戶執行搜索動作時，就表示不是第一次使用了，所以我們將 isFirst 改為 false。
            errMsg: "",
            users: res.data.items,
          });
        })
        .catch((e) => { // 請求成功後更新
          console.log(`請求失敗: ${e.message}`);

          this.$bus.$emit("updateListData", {
            isLoading: false,
            errMsg: e.message,
            users: [], // 清空之前查詢的數據
          });
        });
    },
  },
};
</script>

<style scoped>
</style>