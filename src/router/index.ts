import { createRouter, createWebHistory } from 'vue-router'
import ServerView from '../views/ServerView.vue';
import SettingsView from '../views/SettingsView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/server',
      name: 'server',
      component: ServerView
    },
    {
      path: '/settings',
      name: 'settings',
      component: SettingsView
    }
  ]
})

export default router
