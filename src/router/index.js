import { createRouter, createWebHashHistory } from 'vue-router'
import Login from '../views/login/index'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login
  },
  // route level code-splitting
  // this generates a separate chunk (about.[hash].js) for this route
  // which is lazy-loaded when the route is visited.
  {
    path: '/health',
    name: 'health',
    component: () => import('../views/health-info'),
  },
  {
    path:'/health/detail',
    name:'health-detail',
    component: ()=>import('../views/health-info/detail')
  },
  {
    path: '/examine',
    name: 'examine',
    component: () => import('../views/examine-service')
  },
  {
    path: '/reserve',
    name: 'reserve',
    component: () => import('../views/reserve-info')
  },
  {
    path: '/report',
    name: 'report',
    component: () => import('../views/medical-report')
  },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
