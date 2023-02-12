import { createRouter, createWebHistory } from "vue-router";
//layout
import CommonLayout from "../Layout/CommonLayout";
//landing signup page
import LandingAuth from "../views/AuthView.vue"
//Home
import HomeView from "../views/HomeView.vue";

const routes = [
  {
   path:"/",
   name:"Landing-Page",
   component:LandingAuth
  },
  {
    path: "/layout",
    name: "Layout",
    component: CommonLayout,
    children: [
      {
        path: "/home",
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
