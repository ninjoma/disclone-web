import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Router from './router/index';
import UserStore from './stores/UserStore';

const app = createApp(App);

app.use(UserStore);

// Router
app.use(Router);

// Root Element
app.mount('#app');

