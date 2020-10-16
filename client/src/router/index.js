import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LandingPage from '../views/LandingPage.vue'
import WinnerPage from '../views/WinnerPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/welcome',
    name: 'LandingPage',
    component: LandingPage
  },
  {
    path: '/winner',
    name: 'WinnerPage',
    component: WinnerPage
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
