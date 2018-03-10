<template>
  <div>
    <firebase-entity-list :schema="schema" :collection="collection" :parentKey="parentKey"
                          :parentValue="parentValue"></firebase-entity-list>
  </div>
</template>

<script>
import 'vue-form-generator/dist/vfg-core.css'
import FirebaseEntityList from '@/components/entity-framework/FirebaseEntityList'
import firebaseItemList from '@/components/entity-framework/FirebaseItemList'

export default {
  name: 'Talks',
  mounted () {
    firebaseItemList('events', (events) => {
      this.$data.schema.fields.find(a => a.model === 'event').values = events.map(a => ({id: a.key, name: a.title}))
    })
    firebaseItemList('userInfo', (users) => {
      const speakerField = this.$data.schema.fields.find(a => a.model === 'speaker')
      speakerField.values = users.map(a => ({id: a.key, name: a.displayName}))
      speakerField.context = users
    })
  },
  props: {
    parentKey: null,
    parentValue: null
  },
  data () {
    return {
      collection: 'talks',
      schema: {
        fields: [
          {
            type: 'input',
            inputType: 'text',
            label: 'title',
            model: 'title'
          },
          {
            type: 'textArea',
            inputType: 'text',
            label: 'description',
            model: 'description'
          },
          {
            type: 'select',
            label: 'event',
            model: 'event',
            routerLink: 'event/',
            values: [],
            context: []
          },
          {
            type: 'select',
            label: 'speaker',
            model: 'speaker',
            routerLink: 'users/',
            values: [],
            context: []
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
