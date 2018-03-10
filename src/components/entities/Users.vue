<template>
  <firebase-entity-list :parentKey="'key'" :parentValue="$route.params.id" :schema="schema" :collection="collection"></firebase-entity-list>
</template>

<script>
import FirebaseEntityList from '@/components/entity-framework/FirebaseEntityList'

export default {
  name: 'Users',
  data () {
    return {
      collection: 'userInfo',
      schema: {
        fields: [
          {
            type: 'input',
            inputType: 'text',
            label: 'Display name',
            model: 'displayName',
            url: 'users'
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'First name',
            model: 'firstName'
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'Last name',
            model: 'lastName'
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'twitter',
            model: 'twitter'
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'url',
            model: 'url'
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'bio',
            model: 'bio'
          },
          {
            type: 'picture',
            label: 'Avatar',
            model: 'avatar'
          }
        ]
      }
    }
  },
  components: {
    'firebase-entity-list': FirebaseEntityList
  }
}
</script>

<style scoped>
</style>
