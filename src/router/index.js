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
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
