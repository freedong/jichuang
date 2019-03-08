<template lang="html">
  <div class="" id="websitemb">
    <Navs />
    <div class="website-bg">
    </div>
    <div class="webcon">
      <div class="container">
        <ul>
          <li class="col-lg-4 col-md-6">
            <div class="webcon-div">
              <div class="webcon-img">
                <img src="../assets/websitemb1.png" alt="">
              </div>
              <h5>企业集团/类网站/智能家居</h5>
              <p>官网 | 创新科技 | 家居网站 | 原创品牌 | 独立设计师</p>
              <p>编号 : jc001_001</p>
            </div>
          </li>
          <li class="col-lg-4 col-md-6">
            <div class="webcon-div">
              <div class="">
                <img src="../assets/websitemb1.png" alt="">
              </div>
              <h5>企业集团/类网站/智能家居</h5>
              <p>官网 | 创新科技 | 家居网站 | 原创品牌 | 独立设计师</p>
              <p>编号 : jc001_001</p>
            </div>
          </li>
          <li class="col-lg-4 col-md-6">
            <div class="webcon-div">
              <div class="">
                <img src="../assets/websitemb1.png" alt="">
              </div>
              <h5>企业集团/类网站/智能家居</h5>
              <p>官网 | 创新科技 | 家居网站 | 原创品牌 | 独立设计师</p>
              <p>编号 : jc001_001</p>
            </div>
          </li>
          <li class="col-lg-4 col-md-6">
            <div class="webcon-div">
              <div class="">
                <img src="../assets/websitemb1.png" alt="">
              </div>
              <h5>企业集团/类网站/智能家居</h5>
              <p>官网 | 创新科技 | 家居网站 | 原创品牌 | 独立设计师</p>
              <p>编号 : jc001_001</p>
            </div>
          </li>
          <li class="col-lg-4 col-md-6">
            <div class="webcon-div">
              <div class="">
                <img src="../assets/websitemb1.png" alt="">
              </div>
              <h5>企业集团/类网站/智能家居</h5>
              <p>官网 | 创新科技 | 家居网站 | 原创品牌 | 独立设计师</p>
              <p>编号 : jc001_001</p>
            </div>
          </li>
          <li class="col-lg-4 col-md-6">
            <div class="webcon-div">
              <div class="">
                <img src="../assets/websitemb1.png" alt="">
              </div>
              <h5>企业集团/类网站/智能家居</h5>
              <p>官网 | 创新科技 | 家居网站 | 原创品牌 | 独立设计师</p>
              <p>编号 : jc001_001</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <Footer />
  </div>
</template>

<script>
import Navs from '../components/navs'
import Footer from '../components/footer'
export default {
  name:"websitemb",
  components:{
    Footer,
    Navs
  }
}
</script>

<style lang="scss" scoped>
.website-bg{
  width: 100%;
  height: 500px;
  background: url(../assets/websitbanner.png) center no-repeat;
}
.webcon{
  background-color: #f9f9f9;
  padding-bottom: 30px;
  ul {
    li {
      .webcon-div {
        width: 360px;
        height: 300px;
        background-color: #fff;
        border-radius: 5px;
        box-shadow: 2px 2px 5px 0px #bab9b9;
        margin: 30px 0px 0px;
        text-align: center;
        .webcon-img {
          height: 192px;
        }
        h5 {
          color: #1a1a1a;
          font-size: 18px;
          margin: 18px 0px;
        }
        p {
          color: #999999;
          font-size: 14px;
          margin: 0px;
        }
      }
    }
  }
}
</style>
