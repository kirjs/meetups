<template>
  <div>
    <a @click="isDisplayed = !isDisplayed">{{isDisplayed ? 'Hide the info' : 'Display the info'}}</a>
    <component v-if="isDisplayed" :is="field.component" :model="model" :schema="schema"></component>
  </div>
</template>

<script>
export default {
  name: 'FieldDisplayMeta',
  props: ['field', 'model', 'schema'],
  data () {
    return {isDisplayed: false}
  }
}
</script>

<style scoped>
</style>
