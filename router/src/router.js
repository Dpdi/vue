import Vue from 'vue'
import Router from 'vue-router'
import logo from './views/logo.vue'
import Home from './views/Home.vue'
import chat from './views/chat.vue'
import text from './views/text.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/logo',
      name: 'logo',
      component: logo
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/chat',
      name: 'chat',
      component: chat
    },
    {
      path: '/text',
      name: 'text',
      component: text
    },
    { path: '/', redirect: '/logo' }
  ]
})
