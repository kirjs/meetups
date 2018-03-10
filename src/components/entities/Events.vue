<template>
  <firebase-entity-list :schema='schema' :collection='collection'></firebase-entity-list>
</template>

<script>
import FirebaseEntityList from '@/components/entity-framework/FirebaseEntityList'
import firebaseItemList from '@/components/entity-framework/FirebaseItemList'
import Talks from '@/components/entities/Talks'

export default {
  name: 'Events',
  mounted () {
    firebaseItemList('userInfo', (a, b) => {
    // const speakerField = this.$data.schema.fields.find(a => a.model === 'events').schema.fields.find(a => a.model === 'speaker')
    // speakerField.values = a.map(a => ({id: a.key, name: a.displayName}))
    })
  },
  data () {
    return {
      collection: 'events',
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
            label: 'description',
            rows: 20,
            model: 'description'
          },
          {
            type: 'entity',
            label: 'talks',
            component: Talks,
            parentField: 'event',
            parentValueModel: 'key',
            model: 'key'
          },
          {
            type: 'date',
            model: 'date',
            label: 'date'
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
