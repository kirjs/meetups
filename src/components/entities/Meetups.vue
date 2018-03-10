<template>
  <firebase-entity-list :schema='schema' :collection='collection'></firebase-entity-list>
</template>

<script>
import FirebaseEntityList from '@/components/entity-framework/FirebaseEntityList'

export default {
  name: 'Meetups',
  data () {
    return {
      collection: 'meetups',
      schema: {
        fields: [
          {
            type: 'input',
            inputType: 'text',
            label: 'name',
            model: 'name'
          },
          {
            type: 'input',
            inputType: 'text',
            label: 'description',
            model: 'description'
          },
          {
            type: 'color',
            label: 'Meetup Color',
            model: 'color'
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
