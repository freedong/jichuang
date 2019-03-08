import Vue from 'vue'
import App from './App.vue'
import router from './router'


// 引入jquery
import "jquery"; //js
// 引入bootstrap
import "bootstrap"; //js
import "bootstrap/dist/css/bootstrap.min.css"; //css


Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
