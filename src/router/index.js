import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/men',
    name: 'Men',
    component: () => import('../views/Men.vue')
  },

  {
    path: '/men/:id',
    name: 'Output',
    component: () => import('../views/Output.vue')
  },

  {
    path: '/women',
    name: 'Women',
    component: () => import('../views/Women.vue')
  },

  {
    path: '/women/:id',
    name: 'wOutput',
    component: () => import('../views/wOutput.vue')
  },

  {
    path: '/kids',
    name: 'Kids',
    component: () => import('../views/Kids.vue')
  },

  {
    path: '/kids/:id',
    name: 'kOutput',
    component: () => import('../views/kOutput.vue')
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
