import * as VueRouter from "vue-router";
import LoginView from "../views/LoginView.vue";
import ServerView from "../views/ServerView.vue";
import SettingsView from "../views/SettingsView.vue";
import DebugView from "../views/DebugView.vue";
import InvitationView from "../views/InvitationView.vue"

const routes: VueRouter.RouteRecordRaw[] = [
    { path: '/login', component: LoginView },
    { path: '/server', component: ServerView },
    { path: '/settings', component: SettingsView },
    { path: '/', component: LoginView },
    { path: '/websocket', component: DebugView },
    { path: '/invitation/:server', component: InvitationView}
]

const routerOptions: VueRouter.RouterOptions = {
    history: VueRouter.createWebHistory('/disclone-web/'),
    routes
}

export default VueRouter.createRouter(routerOptions);