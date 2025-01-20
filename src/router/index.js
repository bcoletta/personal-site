import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/resume',
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('@/views/Admin'),
  },
  {
    path: '/resume',
    name: 'resume',
    component: () => import('@/views/Resume'),
  },
  {
    path: '/movies',
    name: 'movies',
    beforeEnter() {
      window.location.href = 'https://brendanratesmovies.com';
    },
    redirect: 'movies/ratings',
    children: [
      {
        path: 'ratings',
        name: 'movie-ratings',
        beforeEnter() {
          window.location.href = 'https://brendanratesmovies.com';
        },
      },
      {
        path: 'stats',
        name: 'movie-stats',
        beforeEnter() {
          window.location.href = 'https://brendanratesmovies.com';
        },
      },
    ],
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
})

export default router
