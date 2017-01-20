<template>
  <div id="app">
    <transition transition-mode="in-out">
        <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  import weui from './lib/weui.css'
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