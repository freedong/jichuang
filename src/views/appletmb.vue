<template lang="html">
  <div class="" id="appletmb">
    <Navs />
    <div class="container">
      <ul>
        <li>
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
import Navs from '../components/navs'
import Footer from '../components/footer'
export default {
  name:'appletmb',
  components:{
    Footer,
    Navs
  }
}
</script>

<style lang="css">
</style>
