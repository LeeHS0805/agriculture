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
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
