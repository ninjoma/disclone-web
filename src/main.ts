import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import Router from './router/index';

const app = createApp(App);

// Router
app.use(Router);

// Root Element
app.mount('#app');

