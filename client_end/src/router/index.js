import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Post from '@/pages/Post'
import Recent from '@/pages/RecentPosts'
import Sorts from '@/pages/Sorts'
import Pics from '@/pages/Pics'
import AllPosts from '@/pages/AllPosts'
import Index from '@/pages/Index'
import article from '@/pages/article'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path:'/',
      redirect:'/index/recent'
    },
    {
      path: '/index',
      name: 'Index',
      component: Index,
      children:[
        {
          path: '/index/post',
          name: 'Post',
          component: Post
        },
        {
          path: '/index/recent',
          name: 'Recent',
          component: Recent
        },
        {
          path: '/index/sorts',
          name: 'Sorts',
          component: Sorts
        },
        {
          path: '/index/pics',
          name: 'Pics',
          component: Pics
        },
        {
          path: '/index/all',
          name: 'AllPosts',
          component: AllPosts
        },
        {
          path: '/index/article',
          name: 'article',
          component: article
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/register',
      name: 'Register',
      component: Register
    }

  ]
})
