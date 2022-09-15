<template>
	<h2>我是Home的内容</h2>
</template>

<script>
	export default {
		name:'Home',
		beforeDestroy() {
			console.log('Home 組件即將被銷毀了')
		},
		mounted() {
			console.log('Home 組件掛載完畢了')
		},
	}
</script>