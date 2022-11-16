import { createRouter, createWebHistory } from 'vue-router'
import ServerView from '../views/ServerView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/server',
      name: 'server',
      component: ServerView
    },
  ]
})

export default router
