<template lang="html">
  <div class="footers" id="footer">
    <div class="container">
      <div class="footers-top">
        <dl class="col-md-3">
          <dt>服务产品</dt>
          <dd>微信小程序品牌站</dd>
          <dd>支付宝小程序品牌站</dd>
          <dd>企业品牌站设计与开发</dd>
          <dd>小程序定制与开发</dd>
        </dl>
        <dl class="col-md-3">
          <dt>联系我们</dt>
          <dd>郑州市 · 二七区汝河路与嵩山南路交叉口</dd>
          <dd>客服QQ： 3065214992</dd>
          <dd>企业邮箱：jckjgzs@jichuango.com</dd>
          <dd>合作咨询：13333837571(微信同号)
                       15639282861(微信同号)</dd>
        </dl>
        <dl class="col-md-3">
          <dt>关于我们</dt>
          <dd>专业定制微信，支付宝，百度，头条等小程序的集成平台, 以商户的营销和管理为目的, 基于微信等小程序的优势,为商户提供店内到店外的智能化经营管理。</dd>
        </dl>
        <dl class="col-md-3">
          <dt>扫一扫关注</dt>
          <dd>手机微信，扫一扫关注我们~</dd>
          <dd>
            <img src="../assets/erweima.png" alt="">
            <img src="../assets/erweima.png" alt="">
          </dd>
        </dl>
      </div>

    </div>
    <div class="footers-bottom">
      <p>Copyright @ 2018 极创科技工作室版权所有 京ICP备28039900号-2</p>
    </div>
  </div>
</template>

<script>
export default {
  name:"footer"
}
</script>

<style lang="scss" scoped>
.footers{
  height: 349px;
  background-color: #101429;
  .footers-bottom {
    height: 70px;
    line-height: 70px;
    border-top: 1px solid #535353;
    text-align: center;
    color: #ffffff;
    font-size: 14px;
    p {
      margin: 0px;
    }
  }
  .footers-top {
    height: 279px;
    box-sizing: border-box;
    dl {
      dt {
        color: #ffffff;
        font-size: 18px;
      }
      dd {
        color: #ffffff;
        font-size: 14px;
      }
    }
  }
}
</style>
