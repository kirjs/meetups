<template>
  <entity-card-list @update="update($event)" :component="component" @add="add()" :schema="schema"
                    :model="model"></entity-card-list>
</template>

<script>
import EntityCardList from '@/components/entity-framework/EntityCardList'
import firebase from '@/services/firebase'

function applyFilter (items, filter) {
  return items.filter(item => {
    return Object.keys(filter).every(key => item[key] === filter[key])
  })
}

export default {
  name: 'GenericEntityCardList',
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
    component: true,
    filter: true,
    service: true
  },
  computed: {},
  created () {
    this.ref.list(value => this.model = applyFilter(value, this.filter))
  },
  data () {
    this.schema.fields.filter(field => field.type === 'link' || field.type === 'linkBelongsTo').forEach(field => {
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
    'entity-card-list': EntityCardList
  },
  methods: {
    update (value) {
      this.ref.update(value)
    },
    add () {
      this.ref.new({
        ...this.filter,
        todo: ''
      })
    }
  }
}
</script>

<style scoped>
</style>
