<template>
  <component :is="field.component" :model="model" :schema="schema"></component>
</template>

<script>
export default {
  name: 'FieldDisplayMeta',
  props: ['field', 'model', 'schema']
}
</script>

<style scoped>
</style>
