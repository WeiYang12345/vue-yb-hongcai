import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '@/views/Home.vue')
  },
  {
    path: '/expert',
    name: 'Expert',
    component: () => import('@/views/Expert.vue')
  },
  {
    path: '/expertdetail',
    name: 'ExpertDetail',
    component: () => import('@/views/ExpertDetail.vue')
  },
  {
    path: '/articledetail',
    name: 'ArticleDetail',
    component: () => import('@/views/ArticleDetail.vue')
  },
  {
    path: '/ifame',
    name: 'ifame',
    component: () => import('@/views/ifame.vue')
  },
  {
    path: '/aaa',
    name: 'aaa',
    component: () => import('@/views/Aaa.vue')
  },
 
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior: () => ({ y: 0 }),
})

export default router
