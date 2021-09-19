let { createRouter, createWebHistory } = VueRouter

const routes = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home'),
    redirect: '/home/basicInfo',
    children: [
      {
        path: 'basicInfo',
        name: 'basicInfo',
        component: () => import(/* webpackChunkName: "about" */ '../views/BasicInfo'),
      },
      {
        path: 'trace',
        name: 'trace',
        component: () => import(/* webpackChunkName: "about" */ '../views/Trace'),
      },
      {
        path: 'deviceControl',
        name: 'deviceControl',
        component: () => import(/* webpackChunkName: "about" */ '../views/deviceControl'),
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
