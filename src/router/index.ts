import { createRouter, createWebHistory } from "vue-router";
import ServerView from "../views/ServerView.vue";
import SettingsView from "../views/SettingsView.vue";
import SigninView from "../views/SigninView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/server",
      name: "server",
      component: ServerView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/settings",
      name: "settings",
      component: SettingsView,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/signin",
      name: "signin",
      component: SigninView,
      meta: {
        requiresAuth: false,
      },
    },
    {
      path: "/:catchAll(.*)",
      redirect: "/server",
    },
  ],
});

async function verify(jwtcookie: string) {
  let res = await fetch(import.meta.env.VITE_API_URL + "User/verify", {
    method: "GET",
    headers: new Headers({
      Accept: "*/*",
      "Content-Type": "application/json",
      Authorization: "Bearer " + jwtcookie,
    }),
  });
  return res.ok;
}

router.beforeEach((to, from, next) => {
  var $cookies = (router as any).app.$cookies;
  var cookie = $cookies.get("jwt");
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    verify(cookie).then((response) => {
      if (response == true) {
        next();
      } else {
        console.log("user is not logged in");
        next("/signin");
      }
    });
  } else {
    next();
  }
});

export default router;
