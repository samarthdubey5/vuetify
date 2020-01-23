import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import HomePage from '../components/HomePage'
import CreateOffer from '../views/CreateOffer'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/homepage',
    name: 'homepage',
    component: HomePage
  },
  {
    path: '/createoffer',
    name: 'CreateOffer',
    component: CreateOffer
  }

]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
