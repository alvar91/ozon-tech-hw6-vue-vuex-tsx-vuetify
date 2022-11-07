import Vue from "vue";
import VueRouter, { RouteConfig } from "vue-router";

import SigninView from "@/views/signin-view.vue";

import { ROUTES_TO } from "@/constants";

import { PersistStorage } from "@/utils/persist/persist";

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
  {
    path: ROUTES_TO.signin,
    name: "SigninView",
    component: SigninView,
  },
  {
    path: ROUTES_TO.signup,
    name: "SignupView",
    component: () => import("@/views/signup-view.vue"),
  },
  {
    path: `${ROUTES_TO.chats}`,
    name: "ChatsView",
    component: () => import("@/views/chats-view.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: ROUTES_TO.createChat,
    name: "ChatCreateView",
    component: () => import("@/views/chat-create-view.vue"),
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "*",
    redirect: ROUTES_TO.signin,
  },
];

const router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  PersistStorage.setStorage(to.path);

  if (to.meta?.requiresAuth) {
    if (!localStorage.getItem("isAuthenticated")) {
      router.push({ name: "SigninView" });
    } else {
      next();
    }
  } else {
    if (localStorage.getItem("isAuthenticated")) {
      router.push(`${ROUTES_TO.chats}`);
    } else {
      next();
    }
  }
});

export default router;
