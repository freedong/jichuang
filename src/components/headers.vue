<template>
  <div class="headers" id="headers">
    <div class="container">
      <div class="headers-logo">
        <img src="../assets/logo.png" alt="">
      </div>
      <div class="headers-nav">
        <ul>
          <li>
            <router-link :to="{ name: 'Index'}">首页</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Appletmb' }">小程序</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'Websitemb' }">网站派</router-link>
          </li>
          <li>
            <router-link :to="{ name: 'About'}">关于我们</router-link>
          </li>
        </ul>
        <a>登录</a>
        <a class="a-btn">马上注册</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'headers',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.headers{
	height: 60px;
  line-height: 60px;
	background-color: rgba(0, 0, 0, 1);
	opacity: 0.5;
  position: fixed;
  width: 100%;
  z-index: 5;
  .container{
    display: flex;
    justify-content: space-between;
  }
  .headers-logo{
    flex: 1;
    height: 60px;
    line-height: 60px;
  }
  .headers-nav {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    line-height: 60px;
    > a{
      font-size: 14px;
      color: #ffffff;
      &.a-btn{
          display: inline-block;
	        width: 68px;
	        height: 24px;
          line-height: 24px;
          text-align: center;
	        background-color: rgba(255, 255, 255, 1);
	        border-radius: 3px 3px 3px 3px;
          color: #1a1a1a;
          font-size: 14px;
          margin-left: 15px;
      }
      &:hover{
        text-decoration: none;
        cursor: pointer;
      }
    }
    ul{
      display: flex;
      justify-content: space-between;
      li{
        margin-right: 80px;
        height: 60px;
        line-height: 60px;
        a{
          font-size: 14px;
          color: #ffffff;
          &:hover{
            text-decoration: none;
          }
        }
      }
    }
  }

}
</style>
