<template>
  <div>
    {{model}}
    <entity-card-list @update="$emit('update', $event)" @add="add()" :schema="schema.schema"
                      :model="value"></entity-card-list>
  </div>
</template>

<script>
import EntityCardList from '@/components/entity-framework/EntityCardList'
import { abstractField } from 'vue-form-generator'

export default {
  mixins: [abstractField],
  created () {
    if (!this.value) {
      this.value = []
    }
  },
  components: {
    'entity-card-list': EntityCardList
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
