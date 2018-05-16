import Vue from 'vue'
import Router from 'vue-router'
import BlogHome from '@/components/BlogHome'
import Home from '@/components/Home'

Vue.use(Router)

export default new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/blog',
      component: BlogHome
    },
    {
      path: '/blog/:id',
      component: BlogHome
    }
  ]
})