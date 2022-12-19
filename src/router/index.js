import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import MyPage from './path.my-page'
import Challenge from './path.challenge'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/magazine',
    name: 'Magazine',
    component: () => import(/* webpackChunkName: "magazine" */ '@/views/magazine/List.vue')
  },
  {
    path: '/dailyLook',
    name: 'DailyLook',
    component: () => import(/* webpackChunkName: "dailyLook" */ '@/views/dailyLook/List.vue')
  },
  {
    path: '/event',
    name: 'Event',
    component: () => import(/* webpackChunkName: "event" */ '@/views/event/List.vue')
  },
  {
    path: '*',
    component: () => import(/* webpackChunkName: "404" */ '@/views/NotFound.vue'),
    meta: {
      layout: 'NoneLayout'
    },
  },
]

const router = new VueRouter({
  mode: 'history',
  routes
})


router.addRoute(MyPage)
router.addRoute(Challenge)

export default router
