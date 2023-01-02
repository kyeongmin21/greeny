import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import MyPage from './path.my-page'
import Challenge from './path.challenge'
import Magazine from './path.magazine'
import DailyLook from './path.dailylook'
import Event from './path.event'


Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
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
router.addRoute(Magazine)
router.addRoute(DailyLook)
router.addRoute(Event)


export default router
