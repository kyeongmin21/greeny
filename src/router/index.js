import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      layout: 'HomeLayout'
    },
  },
  {
    path: '/challenge',
    name: 'Challenge',
    component: () => import(/* webpackChunkName: "challenge" */ '@/views/Challenge/List.vue'),
  },
  {
    path: '/magazine',
    name: 'Magazine',
    component: () => import(/* webpackChunkName: "magazine" */ '@/views/Magazine/List.vue')
  },
  {
    path: '/dailyLook',
    name: 'DailyLook',
    component: () => import(/* webpackChunkName: "dailyLook" */ '@/views/DailyLook/List.vue')
  },
  {
    path: '/event',
    name: 'Event',
    component: () => import(/* webpackChunkName: "event" */ '@/views/Event/List.vue')
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
