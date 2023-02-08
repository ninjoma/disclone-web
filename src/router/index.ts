import * as VueRouter from "vue-router";
import LoginView from "../views/LoginView.vue";

const routes: VueRouter.RouteRecordRaw[] = [
    { path: '/login', component: LoginView }
]

const routerOptions: VueRouter.RouterOptions = {
    history: VueRouter.createWebHistory(),
    routes
}

export default VueRouter.createRouter(routerOptions);