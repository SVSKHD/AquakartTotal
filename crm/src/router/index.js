import { createRouter, createWebHistory } from "vue-router";
//layout
import CommonLayout from "../Layout/CommonLayout";

import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/layout",
    name: "Layout",
    component: CommonLayout,
    children: [
      {
        path: "/",
        name: "home",
        component: HomeView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
