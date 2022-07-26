import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../components/Home.vue')
    },
     {
      path: '/about',
      name: 'about',
      component: () => import('../components/about.vue')
    }
  ]
})

export default router