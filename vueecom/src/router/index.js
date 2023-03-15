import { createRouter, createWebHashHistory } from 'vue-router'
import Layout from "../Layout/Layout.vue"
import HomeView from '../views/HomeView.vue'

const routes = [
  {
   path:"/layout",
   name:"Layout",
   component:Layout,
   children:[
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
   ]
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
