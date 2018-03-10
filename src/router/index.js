import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login'

import FieldGroup from '@/components/entity-framework/FieldGroup'
import FieldEntity from '@/components/entity-framework/FieldEntity'
import FieldDate from '@/components/entity-framework/fields/FieldDate'
import FieldLink from '@/components/entity-framework/fields/FieldLink'
import FieldColor from '@/components/entity-framework/fields/FieldColor'
import FieldPicture from '@/components/entity-framework/fields/FieldPicture'
import FieldMeta from '@/components/entity-framework/fields/FieldMeta'
import entityRouterConfig from '../components/entity-framework/entityRouterConfig'
import talksEntity from '../components/entities/talksEntity'
import usersEntity from '../components/entities/usersEntity'
import GenericEntityList from '@/components/entity-framework/GenericEntityList'
import meetupsEntity from '../components/entities/meetupsEntity'
import FirebaseEntityService from '../components/entity-framework/firebase-entity-service'
import eventsEntity from '../components/entities/eventsEntity'

Vue.component('fieldGroup', FieldGroup)
Vue.component('fieldEntity', FieldEntity)
Vue.component('fieldMeta', FieldMeta)
Vue.component('fieldPicture', FieldPicture)
Vue.component('fieldColor', FieldColor)
Vue.component('FieldLink', FieldLink)
Vue.component('fieldDate', FieldDate)
Vue.use(Router)

Vue.component('generic-entity-list', GenericEntityList)

export default new Router({
  routes: [
    ...entityRouterConfig({
      entities: [
        usersEntity,
        talksEntity,
        meetupsEntity,
        eventsEntity
      ],
      service: new FirebaseEntityService()
    }),
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
