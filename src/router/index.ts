import { createRouter, createWebHistory } from 'vue-router'
import ServerView from '../views/ServerView.vue';
import SettingsView from '../views/SettingsView.vue';

const router = createRouter({
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
