<template lang="html">
  <div class="" id="aboutus">
    <Headers />
    <div class="about-bg">
    </div>
    <div class="container">
      <div class="about-us">
        <div class="about-us-top">
          <h3>关于我们</h3>
          <p><span>【极创科技工作室】</span>专业定制微信，支付宝，百度，头条等小程序的集成平台, 以商户的营销和管理为目的, 基于微信等小程序的优势,为商户提供店内到店外的智能化经营管理。</p>
        </div>
        <div class="about-us-bottom">
          <h3>业务范围</h3>
          <ul>
            <li class="col-lg-6 col-md-6">
              <h5>核心业务</h5>
              <p>专业定制微信，支付宝，百度，头条等小程序的集成平台, 以商户的营销和管理为目的, 基于微信等小程序的优势,为商户提供店内到店外的智能化经营管理。</p>
            </li>
            <li class="col-lg-6 col-md-6">
              <h5>所有业务</h5>
              <p>专业计算机编程，计算机软件设计；软件设计与开发、游戏开发、系统集成、网络工程、企业信息化、网站设计与开发、网页制作、经营电子商务、通信系统开发集成、自动化控制系统开发与集成、自动化工程、软件销售、技术支持、技术服务；教育培训；国内贸易；经营进出口业务；从事广告业务。</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="about-lc">
        <div class="">
          <h3>发展轨迹</h3>
        </div>
      </div>
    </div>
    <Footer />
  </div>

</template>

<script>
import Headers from '../components/headers'
import Footer from '../components/footer'
export default {
  name:"aboutus",
  components:{
    Footer,
    Headers
  }
}
</script>

<style lang="scss" scoped>
.about-bg{
  width: 100%;
  height: 500px;
  background: url(../assets/aboutbanner.png) center no-repeat;
}
.about-lc{

}
.about-us{
  	height: 525px;
  	background-color: rgba(37, 137, 255, 1);
  	box-shadow: 0px 1px 4.6px 0.4px
  		rgba(4, 0, 0, 0.2);
    text-align: center;
    position: relative;
    top: -100px;
    .about-us-top {
      box-sizing: border-box;
      padding: 0px 240px;
      h3 {
        color: #ffffff;
        font-size: 30px;
        font-weight: bold;
        padding-top: 60px;
        padding-bottom: 10px;
      }
      p {
        color: #ffffff;
        font-size: 14px;
        text-align: center;
        span {
          color: #ffffff;
          font-size: 14px;
          font-weight: bold;
        }
      }
    }
    .about-us-bottom{
      ul {
        li {
          box-sizing: border-box;
          padding: 0px 100px;
        }
      }
      h3 {
        color: #ffffff;
        font-size: 30px;
        font-weight: bold;
        padding-top: 100px;
        padding-bottom: 10px;
      }
      h5 {
        color: #ffffff;
        font-size: 18px;
        text-align: left;
      }
      p {
        color: #ffffff;
        font-size: 14px;
        text-align: justify;
      }
    }
}
</style>
