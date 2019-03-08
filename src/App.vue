<template>
  <div id="apps">
     <router-view/>
  </div>
</template>

<script>

export default {
  name: 'app',
}
</script>

<style>
body{
  font-family: PingFangSC-Regular, sans-serif!important;
}
#app {
  font-family: PingFangSC-Regular, sans-serif!important;
  /* font-family: 'Avenir', Helvetica, Arial, sans-serif; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

*{
  padding: 0;
  margin: 0;
}

ul,li{
  list-style: none;
}
p {
  margin: 0px!important;
}
</style>
