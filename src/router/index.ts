import * as VueRouter from "vue-router";
import LoginView from "../views/LoginView.vue";
import ServerView from "../views/ServerView.vue";
import SettingsView from "../views/SettingsView.vue";
import DebugView from "../views/DebugView.vue";

const routes: VueRouter.RouteRecordRaw[] = [
    { path: '/login', component: LoginView },
    { path: '/server', component: ServerView },
    { path: '/settings', component: SettingsView },
    { path: '/debug', component: DebugView }
]

const routerOptions: VueRouter.RouterOptions = {
    history: VueRouter.createWebHistory(),
    routes
}

export default VueRouter.createRouter(routerOptions);