import { createRouter, createWebHistory } from 'vue-router'

import HomeView from '../views/HomeView.vue'
const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: () => import ('../views/Login.vue')
  },
  {
    path: '/category',
    name: 'category',
    component: () => import ('../views/Category.vue')
  },
  {
    path: '/item',
    name: 'item',
    component: () => import ('../views/SubCategory.vue')
  },
  {
    path: '/product',
    name: 'product',
    component: () => import ('../views/Product.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
