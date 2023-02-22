import { createRouter, createWebHistory } from "vue-router";
//layout
import CommonLayout from "../Layout/CommonLayout";
//landing signup page
import LandingAuth from "../views/AuthView.vue";
//Home
import HomeView from "../views/HomeView.vue";
import InvoiceView from "../views/Invoices/InvoiceView.vue";
import TransitView from "../views/Transit/TransitView.vue"
const routes = [
  {
    path: "/",
    name: "Landing-Page",
    component: LandingAuth,
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
      {
        path: "/invoices",
        name: "invoices",
        component: InvoiceView,
      },
      {
        path: "/transit",
        name: "transit",
        component: TransitView,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
