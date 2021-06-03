import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '../components/NotFound.vue'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about/bluedog',
    component: () => import('../views/about/bluedog.vue')
  },
  {
    path: '/about/zebra',
    component: () => import('../views/about/zebra.vue')
  },
  {
    path: '/about/plexcon',
    component: () => import('../views/about/plexcon.vue')
  },
  { path: '/404', component: NotFound },  
  { path: '*', redirect: '/404' },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
