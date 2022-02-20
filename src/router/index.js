import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About'
import gosti from "../views/gosti";
import user from "../views/user";
import hashtags from "../views/Hashtags";

Vue.use(VueRouter)

const routes = [
  {
    mode:history,
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
  {
    path: '/gosti',
    name: 'gosti',
    component: gosti,
  },
  {
    path: '/user/:id',
    name: 'user',
    component: user,
  },
  {
    path: '/hashtags',
    name: 'hashtags',
    component: hashtags,
  }
]

const router = new VueRouter({
  routes
})

export default router
