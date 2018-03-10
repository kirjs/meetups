<template>
  <component :is="schema.component" :parentKey="schema.parentField"></component>
</template>

<script>
import { abstractField } from 'vue-form-generator'

export default {
  props: ['schema'],
  mixins: [abstractField]
}
</script>

<style scoped>
</style>
