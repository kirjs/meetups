<template>
  <span>
    <router-link :to="this.field.entity.path + '/' + value" v-if="this.field.entity.path">{{actualValue}}</router-link>
  </span>
</template>

<script>
export default {
  name: 'FieldDisplayLink',
  props: ['field', 'model', 'schema', 'value'],
  computed: {
    displayKey () {
      return this.field.displayKey || 'name'
    },
    selectedContext () {
      debugger;
      return (this.field.context || []).filter(a => a.key === this.value) || {[this.displayKey]: 'No Value'}
    },
    actualValue () {
      return this.selectedContext[this.displayKey]
    }
  }
}
</script>

<style scoped>
</style>
