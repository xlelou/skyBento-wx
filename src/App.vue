<template>
  <div id="app">
    <transition name="slide-left">
        <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'app',
    data() {
      return {

      }
    },
    mounted() {
      if (this.$route.path === '/') {
        this.$router.push({
          path: '/list'
        });
      }
    }
  }
</script>
<style>
  * {
	padding: 0;
	margin: 0;
	font-family: "Microsoft YaHei";
}
</style>