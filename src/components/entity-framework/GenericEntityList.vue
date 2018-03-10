<template>
  <entity-list :canAdd="canAdd" @update="update($event)" @add="add()" :schema="schema" :model="model"></entity-list>
</template>

<script>
import EntityList from '@/components/entity-framework/EntityList'
import firebase from '@/services/firebase'

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
    parentKey: true,
    parentValue: true,
    service: true
  },
  computed: {},
  created () {
    this.ref.list(value => this.model = value)
  },
  data () {

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
      const newVar = {}
      if (this.parentKey) {
        newVar[this.parentKey] = this.parentValue
      }
      this.ref.new(newVar)
    }
  }
}
</script>

<style scoped>
</style>
