
import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";
import VueCookies from 'vue-cookies'
import "./assets/globals.css";

const app = createApp(App);

app.use(createPinia());
app.use(router);
app.use(VueCookies, { expires: '7d'});
(router as any).app = app;

app.mount("#app");
