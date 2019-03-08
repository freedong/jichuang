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
              <a href="#">首页</a>
            </li>
            <li>
              <a href="#">小程序</a>
            </li>
            <li>
              <a href="#">网站派</a>
            </li>
            <li>
              <a href="#">关于我们</a>
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
