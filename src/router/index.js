import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Start from '@/components/Start'
import Meetups from '@/components/meetups/Meetups'
import MeetupsWrapper from '@/components/meetups/MeetupsWrapper'
import MeetupPage from '@/components/meetups/MeetupPage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/start',
      name: 'Start',
      component: Start
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/meetups',
      name: 'Meetups',
      component: MeetupsWrapper,
      children: [
        { path: '', component: Meetups },
        { path: ':id', component: MeetupPage }
      ]
    }
  ]
})
