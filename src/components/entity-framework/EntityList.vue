<template>
  <div>
    <button @click="$emit('add')" v-if="canAdd">Add</button>
    <div v-for="entity in model" :key="entity['.key']">
      <single-entity @update="$emit('update', $event)" :model="entity" :schema="schema"></single-entity>
    </div>
  </div>
</template>

<script>
import Entity from '@/components/entity-framework/Entity'

export default {
  name: 'Meetup',
  props: ['model', 'schema', 'filter', 'canAdd'],
  created () {
  },
  components: {
    'single-entity': Entity
  }
}
</script>

<style scoped>
</style>
