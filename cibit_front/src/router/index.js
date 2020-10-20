import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Consult from  '@/components/Consult'
import Kanpan from  '@/components/Kanpan'
import Login from  '@/components/Login'
import Service from  '@/components/Service'
import Mine from  '@/components/Mine'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Consult',
      name: 'Consult',
      component: Consult
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
