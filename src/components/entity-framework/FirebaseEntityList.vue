<template>
  <entity-list :canAdd="canAdd" @update="update($event)" @add="add()" :schema="schema" :model="model"></entity-list>
</template>

<script>
import EntityList from '@/components/entity-framework/EntityList'
import firebase from '@/services/firebase'

export default {
  name: 'FirebaseEntityList',
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
    parentValue: true
  },
  computed: {},
  created () {
    this.ref.on('value', value => {
      const val = value.val() || {}
      let model = Object.keys(val).map(key => ({...val[key], key: key}))
      if (this.parentKey && this.parentValue) {
        model = model.filter(val => val[this.parentKey] === this.parentValue)
      }
      this.model = model
    })
  },
  data () {
    return {
      ref: firebase.db.ref(this.collection),
      model: []
    }
  },
  components: {
    'entity-list': EntityList
  },
  methods: {
    update (update) {
      const value = {...update}
      const key = value.key
      delete value.key
      this.ref.child(key).update(value)
    },
    add () {
      const newVar = {}
      if (this.parentKey) {
        newVar[this.parentKey] = this.parentValue
      }
      this.ref.push().set(newVar)
    }
  }
}
</script>

<style scoped>
</style>
