import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: () => import(/* webpackChunkName: "home" */ './views/Home.vue'),
      redirect: '/dashboard',
      icon: 'none',
      invisible: true,
      children: [
        {
          path: '/dashboard',
          name: 'Dashboard',
          redirect: '/dashboard/workplace',
          component: () => import(/* webpackChunkName: "dashboard" */ './components/layouts/RouteLayout.vue'),
          icon: 'dashboard',
          children: [
            {
              path: '/dashboard/analysis',
              name: 'Analysis',
              icon: 'none',
              component: () => import(/* webpackChunkName: "form" */ './components/form/Ins02.vue')
            },
            {
              path: '/dashboard/workplace',
              name: 'Workplace',
              icon: 'none',
              component: () => import(/* webpackChunkName: "form" */ './components/dashboard/Workspace.vue')
            }
          ]
        },
        {
          path: '/form',
          name: 'Form',
          redirect: '/form/Ins03',
          component: () => import(/* webpackChunkName: "form" */ './components/layouts/RouteLayout.vue'),
          icon: 'table',
          children: [
            {
              path: '/form/Ins03',
              name: 'Ins03',
              icon: 'none',
              component: () => import(/* webpackChunkName: "form" */ './components/form/Ins03.vue')
            },
            {
              path: '/form/Ins04',
              name: 'Ins04',
              icon: 'none',
              component: () => import(/* webpackChunkName: "form" */ './components/form/Ins04.vue')
            }
          ]
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      // route level code-splitting
      // this generates a separate chunk (login.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "login" */ './views/Login.vue')
    }
  ]
})
