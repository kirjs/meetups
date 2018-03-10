<template>
  <entity-list @update="update($event)" @add="add()" :schema="schema" :model="model"></entity-list>
</template>

<script>
import EntityList from '@/components/entity-framework/EntityList'
import firebase from '@/services/firebase'

function applyFilter (items, filter) {
  return items.filter(item => {
    return Object.keys(filter).every(key => item[key] === filter[key])
  })
}

export default {
  name: 'GenericEntityList',
  props: {
    collection: {
      required: true,
      type: String
    },
    schema: {
      required: true
    },
    canAdd: {
      type: Boolean,
      defaultValue: true
    },
    filter: true,
    service: true
  },
  computed: {},
  created () {
    this.ref.list(value => this.model = applyFilter(value, this.filter))
  },
  data () {
    this.schema.fields.filter(field => field.type === 'link' || field.type === 'linkBelongsTo' ).forEach(field => {
      this.service.ref(field.entity.collection).list((items) => {
        field.context = items
      })
    })


    return {
      ref: this.service.ref(this.collection),
      model: []
    }
  },
  components: {
    'entity-list': EntityList
  },
  methods: {
    update (value) {
      this.ref.update(value)
    },
    add () {
      this.ref.new(this.filter)
    }
  }
}
</script>

<style scoped>
</style>
