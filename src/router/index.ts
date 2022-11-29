import { createRouter, createWebHistory } from 'vue-router'
import ServerView from '../views/ServerView.vue';
import SettingsView from '../views/SettingsView.vue';
import SigninView from '../views/SigninView.vue';

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
    },{
      path: '/signin',
      name: 'signin',
      component: SigninView
    }
  ]
})

export default router;
