import Vue from 'vue'
import VueRouter from 'vue-router'
import * as Pages from '@/pages'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Pages.HomePage
  },
  {
    path: '/cv',
    name: 'Home',
    component: Pages.ResumePage
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
