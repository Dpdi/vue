import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Goodlist from './views/Goodlist.vue'
import Car from './views/Car.vue'
import User from './views/User.vue'

Vue.use(Router)

export default new Router({
  // mode:'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/goodlist',
      name: 'goodlist',
      component: Goodlist
    },
    {
      path: '/car',
      name: 'car',
      component: Car
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    { path: '/', redirect: '/home' }
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (about.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    // }
  ]
})
