import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/resume',
  },
  {
    path: '/resume',
    name: 'resume',
    component: () => import('@/views/Resume'),
  },
  {
    path: '/movies',
    name: 'movies',
    component: () => import('@/views/Movies'),
    redirect: 'movies/ratings',
    children: [
      {
        path: 'ratings',
        name: 'movie-ratings',
        component: () => import('@/views/MovieRatings'),
      },
      {
        path: 'stats',
        name: 'movie-stats',
        component: () => import('@/views/MovieStats'),
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
