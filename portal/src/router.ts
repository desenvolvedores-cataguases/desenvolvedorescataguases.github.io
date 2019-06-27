import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Events from './views/Events.vue'
import How from './views/How.vue'
import About from './views/About.vue'
import Supporters from './views/Supporters.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/events',
      name: 'events',
      component: Events
    },
    {
      path: '/how',
      name: 'how',
      component: How
    },
    {
      path: '/about',
      name: 'about',
      component: About
    },
    {
      path: '/supporters',
      name: 'supporters',
      component: Supporters
    }
  ]
})
