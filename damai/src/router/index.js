import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home/Home'
import Music from '../views/music/Musics'
import Movie from '../views/home/movie/Moive'
import Dayone from '../views/home/movie/Dayone'
import Daytwo from '../views/home/movie/Daytwo'
import Daythree from '../views/home/movie/Daythree'
import Dayfour from '../views/home/movie/Dayfour'
import Dayfive from '../views/home/movie/Dayfive'
import Daysix from '../views/home/movie/Daysix'
import Dayseven from '../views/home/movie/Dayseven'
import City from '../views/city/City'
import Detail from '../views/detail/Detail'
import Details from '../views/details/Detail'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home/movie/dayone'
  },
  {
    path: '/home',
    component: Home,
    // 嵌套路由
    children: [
      {
        path: '/home/movie',
        component: Movie,
        // redirect: '/home/movie/dayone',
        children: [
          {
            path: '/home/movie/dayone',
            component: Dayone
          },
          {
            path: '/home/movie/daytwo',
            component: Daytwo
          },
          {
            path: '/home/movie/daythree',
            component: Daythree
          },
          {
            path: '/home/movie/dayfour',
            component: Dayfour
          },
          {
            path: '/home/movie/dayfive',
            component: Dayfive
          },
          {
            path: '/home/movie/daysix',
            component: Daysix
          },
          {
            path: '/home/movie/dayseven',
            component: Dayseven
          },
        ]
      }
    ]
  },
  {
    path: '/music',
    component: Music
  },
  {
    path:'/city',
    component:City
  },
  {
    path:"/detail",
    // name:"detail",
    component:Detail
  },
  {
    path:"/details",
    // name:"detail",
    component:Details
  }
]

const router = new VueRouter({
  routes
})

export default router
