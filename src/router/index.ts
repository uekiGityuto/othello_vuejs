import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import VHome from '../views/VHome.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'home',
    component: VHome
  },
  {
    path: '/game',
    name: 'game',
    // route level code-splitting
    // this generates a separate chunk (game.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "game" */ '../views/VGame.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
