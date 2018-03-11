<template>
  <div>
    <button @click="$emit('add')" v-if="true">Add</button>
    <div v-for="entity in model" :key="entity['.key']">
      <component :is="component" @update="$emit('update', $event)" :model="entity" :schema="schema"></component>
    </div>
  </div>
</template>

<script>
import Entity from '@/components/entity-framework/Entity'

export default {
  name: 'Meetup',
  props: {
    model: true,
    schema: true,
    filter: true,
    canAdd: true,
    component: {
      default () {
        return Entity
      }
    }
  },
  components: {
    'single-entity': Entity
  }
}
</script>

<style scoped>
</style>
