import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/Login'
import Start from '@/components/Start'
import Users from '@/components/entities/Users'
import Meetups from '@/components/entities/Meetups'
import EventCards from '@/components/entities/EventCards'

import FieldGroup from '@/components/entity-framework/FieldGroup'
import FieldEntity from '@/components/entity-framework/FieldEntity'
import FieldDate from '@/components/entity-framework/fields/FieldDate'
import FieldLink from '@/components/entity-framework/fields/FieldLink'
import FieldColor from '@/components/entity-framework/fields/FieldColor'
import FieldPicture from '@/components/entity-framework/fields/FieldPicture'
import FieldMeta from '@/components/entity-framework/fields/FieldMeta'
import entityRouterConfig from '../components/entity-framework/entityRouterConfig'
import talksEntity from '../components/entities/talks-entity'
import eventsEntity from '../components/entities/events-entity'
import FirebaseEntityService from '../components/entity-framework/firebase-entity-service'

Vue.component('fieldGroup', FieldGroup)
Vue.component('fieldEntity', FieldEntity)
Vue.component('fieldMeta', FieldMeta)
Vue.component('fieldPicture', FieldPicture)
Vue.component('fieldColor', FieldColor)
Vue.component('FieldLink', FieldLink)
Vue.component('fieldDate', FieldDate)

Vue.use(Router)

export default new Router({
  routes: [
    ...entityRouterConfig({
      routes: [
        talksEntity,
        eventsEntity
      ],
      service: new FirebaseEntityService()
    }),
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
      component: Meetups
    },
    {
      path: '/users',
      component: Users,
      children: [
        {
          path: ':id',
          component: Users
        }
      ]
    },
    {
      path: 'talkcard/:id',
      component: EventCards
    }
  ]
})
