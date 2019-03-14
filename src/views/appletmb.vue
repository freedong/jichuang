<template lang="html">
  <div class="" id="appletmb">
    <Headers />
    <div class="container appcon">
      <ul>
        <li class="col-lg-3 col-md-4">
          <section>
              <h5>模板名称</h5>
              <div class="">
                <img src="../assets/appletmb1.png" alt="">
              </div>
          </section>
          <section>
              <img src="../assets/appletma1.png" alt="">
              <h3>扫描查看案例</h3>
          </section>
        </li>
        <li class="col-lg-3 col-md-4">
          <section>
              <h5>模板名称</h5>
              <div class="">
                <img src="../assets/appletmb1.png" alt="">
              </div>
          </section>
          <section>
              <img src="../assets/appletma1.png" alt="">
              <h3>扫描查看案例</h3>
          </section>
        </li>
        <li class="col-lg-3 col-md-4">
          <section>
              <h5>模板名称</h5>
              <div class="">
                <img src="../assets/appletmb1.png" alt="">
              </div>
          </section>
          <section>
              <img src="../assets/appletma1.png" alt="">
              <h3>扫描查看案例</h3>
          </section>
        </li>
        <li class="col-lg-3 col-md-4">
          <section>
              <h5>模板名称</h5>
              <div class="">
                <img src="../assets/appletmb1.png" alt="">
              </div>
          </section>
          <section>
              <img src="../assets/appletma1.png" alt="">
              <h3>扫描查看案例</h3>
          </section>
        </li>
      </ul>
    </div>
    <Footer />
  </div>
</template>

<script>
import Headers from '../components/headers'
import Navs from '../components/navs'
import Footer from '../components/footer'
export default {
  name:'appletmb',
  components:{
    Footer,
    Navs,
    Headers
  }
}
</script>

<style lang="scss" scoped>
.appcon{
  ul {
    li {
      section {
        &:nth-child(1){
          h5{
	           width: 270px;
	           height: 28px;
	           background-color: rgba(249, 249, 249, 1);
	           box-shadow: 0px 3px 4.6px 0.4px rgba(4, 0, 0, 0.34);
	           border-radius: 5px 5px 0px 0px;
             text-align: center;
             color: #000000;
             font-size: 14px;
          }
        }
        &:nth-child(2){
          display: none;
        }
      }
    }
  }
}
</style>
