import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/HomePage'
import realTimeInfo from  '@/components/realTimeInfo'
import Kanpan from  '@/components/Kanpan'
import Login from  '@/components/Login'
import Service from  '@/components/Service'
import Mine from  '@/components/Mine'
import Regist from  '@/components/Regist'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/realTimeInfo',
      name: 'realTimeInfo',
      component: realTimeInfo
    },
    {
      path: '/Kanpan',
      name: 'Kanpan',
      component: Kanpan
    },
    {
      path: '/',
      name: 'Login',
      component: Login
    },
    {
      path: '/Service',
      name: 'Service',
      component: Service
    },
    {
      path: '/Mine',
      name: 'Mine',
      component: Mine
    },
    {
      path: '/Regist',
      name: 'Regist',
      component: Regist
    },
  ]
})
