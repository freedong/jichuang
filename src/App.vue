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
  background-color: #f9f9f9!important;
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

a:hover{
  text-decoration: none;
}
ol, ul{
  margin-bottom: 0px!important;
}
.h4, .h5, .h6, h4, h5, h6{
  margin: 0px!important;
}
</style>
