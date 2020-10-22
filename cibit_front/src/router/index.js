import Vue from 'vue'
import Router from 'vue-router'
import home from "../components/home";
import HomePage from '@/components/HomePage'
import realTimeInfo from  '@/components/realTimeInfo'
import Kanpan from  '@/components/Kanpan'
import Login from  '@/components/Login'
import Service from  '@/components/Service'
import Mine from  '@/components/Mine'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      name:'/home',
      component: home
    },
    {
      path: '/HomePage',
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
      path: '/Login',
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
    }
  ]
})
