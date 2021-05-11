import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about-me',
    name: 'About',
    component: () => import('../views/About.vue')
  },
  //Builder
  {
    path: '/telegram-bot',
    name: 'Telegram Bot',
    component: () => import('../views/Telegram.vue')
  },
  {
    path: '/messenger-bot',
    name: 'Messenger Bot',
    component: () => import('../views/Messenger.vue')
  },
  {
    path: '/discord-bot',
    name: 'Discord Bot',
    component: () => import('../views/Discord.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
