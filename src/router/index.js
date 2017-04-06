import Vue from 'vue'
import Router from 'vue-router'
import SignIn from '@/components/SignIn'
import SignUp from '@/components/users/SignUp'
import Profile from '@/components/users/Profile'
import PostsIndex from '@/components/posts/Index.vue'
import PreSignUp from '@/components/PreSignUp'
import CompanyProfile from '@/components/company/Profile'
import CompanySignUp from '@/components/company/SignUp'
import JobPage from '@/components/posts/jobPage'
import JobPost from '@/components/company/CreatePost'
import Inbox from '@/components/inbox/Inbox'
import Edit from '@/components/users/Edit'

Vue.use(Router)

// singleton pattern for ES6
// https://k94n.com/es6-modules-single-instance-pattern
// importing @/router/index.js will always return the same instance
export default new Router({
  routes: [
    {
      path: '/',
      component: SignIn
    },
    {
      path: '/sign_in',
      name: 'Users.sign_in',
      component: SignIn
    },
    {
      path: '/pre_sign_up',
      name: 'pre_sign_up',
      component: PreSignUp
    },
    {
      path: '/profile',
      name: 'Users.profile',
      component: Profile
    },
    {
      path: '/edit',
      name: 'Users.edit',
      component: Edit
    },
    {
      path: '/sign_up',
      name: 'Users.sign_up',
      component: SignUp
    },
    {
      path: '/posts',
      name: 'Posts.index',
      component: PostsIndex
    },
    {
      path: '/company',
      name: 'Company.profile',
      component: CompanyProfile
    },
    {
      path: '/company/signup',
      name: 'Company.sign_up',
      component: CompanySignUp
    },
    {
      path: '/company/createpost',
      name: 'Company.create_post',
      component: JobPost
    },
    {
      path: '/inbox',
      name: 'main.inbox',
      component: Inbox
    },
    {
      path: '/post/:id',
      name: 'Posts.page',
      component: JobPage
    }
  ]
})
