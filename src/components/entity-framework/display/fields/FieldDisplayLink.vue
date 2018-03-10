<template>
  <span>
    <span v-for="(actualValue, index) in actualValues" :key="actualValue.key">
      <span v-if="!field.entity.path">{{actualValue}}</span>
      <router-link :to="field.entity.path + '/' + value" v-if="field.entity.path">{{actualValue}}</router-link>
    </span>
  </span>
</template>

<script>
export default {
  name: 'FieldDisplayLink',
  props: ['field', 'model', 'schema', 'value'],
  computed: {
    values () {
      return [].concat(this.value)
    },
    displayKey () {
      return this.field.displayKey || 'name'
    },
    selectedContext () {
      return (this.field.context || []).filter(a => this.values.includes(a.key))
    },
    actualValues () {
      return this.selectedContext.map(item => item[this.displayKey])
    }
  }
}
</script>

<style scoped>
</style>
