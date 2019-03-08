import Vue from 'vue'
import Router from 'vue-router'
import Index from '../views/index'
import About from '../views/aboutus'
import Appletmb from '../views/appletmb'
import Websitemb from '../views/websitemb'


Vue.use(Router)


export default new Router({
  routes:[
    {
      path:'/',
      name:'Index',
      component:Index
    },
    {
      path:'/about',
      name:'About',
      component:About
    },
    {
      path:'/appletmb',
      name:'Appletmb',
      component:Appletmb
    },
    {
      path:'/websitemb',
      name:'Websitemb',
      component:Websitemb
    }
  ]
})
