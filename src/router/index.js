import Vue from 'vue'
import Router from 'vue-router'
import Pages from '../Views/Pages'
import HomeView from '../Views/HomeView'
import MovieView from '../Views/MovieView'
import BookView from '../Views/BookView'
import StatusView from '../Views/StatusView'
import GroupView from '../Views/GroupView'
import RegisterView from '../Views/RegisterView'
import LoginView from '../Views/LoginView'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:'/pages'
    },
    {
      path:'/pages',
      component:Pages,
      children:[
        {
          path:'',
          redirect:'/pages/home'
        },
        {
          path:'home',
          component:HomeView
        },
        {
          path: 'movie',
          component: MovieView
        },
        {
          path:'book',
          component:BookView
        },
        {
          path:'status',
          component:StatusView
        },
        {
          path:'group',
          component:GroupView
        }
      ]
    },
    {
      path: '/login',
      name: 'LoginView',
      component: LoginView
    },
    {
      path: '/register',
      name: 'RegisterView',
      component: RegisterView
    },
  ]
})
