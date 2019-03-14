<template>
  <div class="" id="navs">
    <div class="navs">
      <div class="container">
        <div class="">
          <img src="../assets/logo.png" alt="">
        </div>
        <div class="">
          <ul>
            <li>
              <router-link :to="{ name: 'Index', params: {param:123} }">首页</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'Appletmb', params: {param:123} }">小程序</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'Websitemb', params: {param:123} }">网站派</router-link>
            </li>
            <li>
              <router-link :to="{ name: 'About', params: {param:123} }">关于我们</router-link>
            </li>
          </ul>
          <button>登录</button>
          <button>马上注册</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'navs',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.navs{
  background-color: #bbbbbb;
  position: fixed;
  top: 0px;
  left: 0px;
  opacity: .3;
  width: 100%;
  height: 60px;
}
</style>
