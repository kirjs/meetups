<template>
  <component :is="field.component" :parentKey="field.parentField" :parentValue="value">
  </component>
</template>
<script>
export default {
  name: 'FieldDisplayEntity',
  props: ['field', 'value', 'schema']
}
</script>

<style scoped>
</style>
