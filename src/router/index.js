import Vue from 'vue'
import Router from 'vue-router'
import Munchies from '../components/Munchies'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Munchies',
      component: Munchies
    }
  ]
})
