<template>
  <div>
    {{model}}
    <entity-list @update="$emit('update', $event)" @add="add()" :schema="schema.schema" :model="value"></entity-list>
  </div>
</template>

<script>
import EntityList from '@/components/entity-framework/EntityList'
import { abstractField } from 'vue-form-generator'
export default {
  mixins: [abstractField],
  created () {
    if (!this.value) {
      this.value = []
    }
  },
  components: {
    'entity-list': EntityList
  },
  methods: {
    update () {
      debugger
    }
  }
}
</script>

<style scoped>
</style>
