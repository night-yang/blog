import Vue from 'vue'
import Router from 'vue-router'
import BlogHome from '@/components/BlogHome'

Vue.use(Router)

export default new Router({
  mode: 'history',

  routes: [
    {
      path: '/',
      component: BlogHome
    },
    {
      path: '/blog/:id',
      component: BlogHome
    }
  ]
})