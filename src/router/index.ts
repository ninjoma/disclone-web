import * as VueRouter from "vue-router";
import LoginView from "../views/LoginView.vue";
import ServerView from "../views/ServerView.vue";

const routes: VueRouter.RouteRecordRaw[] = [
    { path: '/login', component: LoginView },
    { path: '/server', component: ServerView }
]

const routerOptions: VueRouter.RouterOptions = {
    history: VueRouter.createWebHistory(),
    routes
}

export default VueRouter.createRouter(routerOptions);