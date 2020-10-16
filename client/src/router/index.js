import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import LandingPage from '../views/LandingPage.vue'
import WinnerPage from '../views/WinnerPage.vue'
import GamePlay from '../components/GamePlay.vue'
import Waiting from '../components/Waiting.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'LandingPage',
    component: LandingPage
  },
  // {
  //   path: '/welcome',
  //   name: 'LandingPage',
  //   component: LandingPage
  // },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/winner',
    name: 'WinnerPage',
    component: WinnerPage
  },
  {
    path: '/gameplay',
    name: 'GamePlay',
    component: GamePlay
  },
  {
    path: '/waiting',
    name: 'Waiting',
    component: Waiting
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
