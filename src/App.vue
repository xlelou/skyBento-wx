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
    }
  }

</script>
<style>
  * {
    padding: 0;
    margin: 0;
    font-family: "Microsoft YaHei";
  }
  
  canvas {
    display: block;
    border: 1px solid #fff;
    margin: 0 auto
  }
</style>