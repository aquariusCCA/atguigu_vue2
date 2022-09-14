<template>
  <div>
    <h1>當前求和為: {{ sum }}</h1>

    <!-- number修飾符: 讓其收集到的數據全都是 number 類型的 -->
    <select v-model.number="n">
      <!-- 讓所有的 value 全部綁定為數字 -->
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>

    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementOdd">當前求和為奇數再加</button>
    <button @click="incrementWait">等一等再加</button>
  </div>
</template>

<script>
export default {
  //計算組件
  name: "Count",
  data() {
    return {
      n: 1, // 代表用戶在 select 框開始的時候選擇的數字
      sum: 0, // 當前的和
    };
  },
  methods: {
    increment() {
      this.sum += this.n;
    },
    decrement() {
      this.sum -= this.n;
    },
    incrementOdd() {
      this.sum = this.sum % 2 !== 0 ? this.sum + this.n : this.sum;
    },
    incrementWait() {
      setTimeout(() => (this.sum += this.n), 2000);
    },
  },
};
</script>

<style scoped>
button {
  margin-left: 5px;
}
</style>