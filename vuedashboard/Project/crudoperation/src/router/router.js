import { createRouter, createWebHistory } from 'vue-router'
import Dashboard from '../components/Dashboard.vue'
import Home from '../components/LoginPage.vue'
import Searchbar from '../components/Searchbar.vue'

const routes = [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
    //   component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
        component:Dashboard
    },
    {
        path: '/searchbar',
        name: 'Searchbar',
        component: Searchbar
      },
  ]
  
  const router = createRouter({
    // history: createWebHashHistory(),
    history:createWebHistory(),
    routes
  })
  
  export default router