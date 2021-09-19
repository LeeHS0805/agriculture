<template>
  <div id="nav" class="font-monospace">
    <router-view></router-view>
  </div>
</template>
<script>
  import {provide} from "vue";
  import * as echarts from 'echarts'
  export default {
    name: "App",
    setup(){
      provide('es',echarts)
    }
  }
</script>
<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-width: 1200px;
}

</style>
