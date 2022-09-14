<template>
  <div class="row">
    <!-- 展示用戶列表-->
    <!-- v-show="info.users.length": 假設今天沒有用戶就不需要展示，我們就以數組長度來做判斷 -->
    <div
      v-show="info.users.length"
      class="card"
      v-for="user in info.users"
      :key="user.login"
    >
      <!-- user.html_url: 用戶的 github 地址。     -->
      <a :href="user.html_url" target="_blank">
        <!-- user.avatar_url: 用戶的頭像地址 -->
        <img :src="user.avatar_url" style="width: 100px" />
      </a>

      <!-- user.login: 用戶的用戶名   -->
      <p class="card-text">{{ user.login }}</p>
    </div>


    <!---歡迎詞-->
    <!-- 
        當用戶點擊 Serch 按鈕的時候，就表示不是第一次使用，
        所以我們在 searchUsers() 觸發事件時，將 isFirst 改成 false。 
    -->
    <h1 v-show="info.isFirst">Welcome!</h1>


    <!--加載中--->
    <!-- 當我們請求數據時，但是數據還沒有回來，這時候 isLoading 就必須為 true。  -->
    <h1 v-show="info.isLoading">Loading...</h1>


    <!---錯誤信息-->
    <!-- 沒有錯誤信息就不需要展示，所以使用數組作為判斷的依據就可以了。 -->
    <h1 v-show="info.errMsg">
      Something has been wrong, errorMessage: {{ info.errMsg }}
    </h1>
  </div>
</template>

<script>
export default {
  name: "List",
  data() {
    return {
      info: {
        isFirst: true, // 是否為第一次使用
        isLoading: false, // 是否在加載中
        errMsg: "", // 存儲錯誤訊息
        users: [],
      },
    };
  },
  // 接收數據的人，要在 mounted() 內，綁定自定義事件。
  mounted() {
    this.$bus.$on("updateListData", (dataObj) => {
      // console.log(`我是list，接到了数据data:`, users);

      // this.isFirst = isFirst;
      // this.isLoading = isLoading;
      // this.errMsg = errMsg;
      // this.users = users;

      // 通過字面量的形式合併屬性，重複的屬性以 dataObj 為主。
      this.info = { ...this.info, ...dataObj };
    });
  },
};
</script>

<style scoped>
.album {
  min-height: 50rem; /* Can be removed; just added for demo purposes */
  padding-top: 3rem;
  padding-bottom: 3rem;
  background-color: #f7f7f7;
}

.card {
  float: left;
  width: 33.333%;
  padding: 0.75rem;
  margin-bottom: 2rem;
  border: 1px solid #efefef;
  text-align: center;
}

.card > img {
  margin-bottom: 0.75rem;
  border-radius: 100px;
}

.card-text {
  font-size: 85%;
}
</style>