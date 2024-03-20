import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import { MainPage, AuthPage } from "@/views";

import {
  Layout,
  LocalStorageName,
  RoutesName,
  RoutesTo,
} from "@/shared/constants/constants";
import { getCookie } from "@/shared/utils/cookie-helpers";

const routes: Array<RouteRecordRaw> = [
  {
    path: RoutesTo.main,
    name: RoutesName.main,
    component: MainPage,
    meta: {
      layout: Layout.default,
      requiresAuth: true,
    },
  },
  {
    path: RoutesTo.auth,
    name: RoutesName.auth,
    component: AuthPage,
    meta: {
      layout: Layout.auth,
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach(async (to, _, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const token = getCookie(LocalStorageName.token);

  if (requiresAuth && !token) {
    next(RoutesTo.auth);
  } else if (!requiresAuth && token) {
    next(RoutesTo.main);
  } else {
    next();
  }
});

export default router;
