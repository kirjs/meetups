<template>
  <span>
    <span v-if="!this.field.path">{{actualValue}}</span>
    <router-link :to="this.field.path + '/' + value" v-if="this.field.routerLink">{{actualValue}}</router-link>
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
      return (this.field.context || []).find(a => a.key === this.value) || {[this.displayKey]: 'No Value'}
    },
    actualValue () {
      return this.selectedContext[this.displayKey]
    }
  }
}
</script>

<style scoped>
</style>
