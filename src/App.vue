<template>
  <div id="app">
    <div><router-link to="/shopCar"></router-link></div>
    <router-view></router-view>
  </div>
</template>



<style scoped>
  @import '../static/reset.css';
  @import url(https://res8.vmallres.com/shopdc/cdn/modules/common/mb/css/common.css?v=20181106000017);
</style>


<script>
export default {
  name: 'App'
}
</script>

<style>
  #app{
    height: 100%;
  }
</style>
