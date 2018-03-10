<template>
  <span>
    <span v-if="!field.url">{{value}}</span>
    <router-link :to="'/'+field.url+'/'+model.key" v-if="field.url">{{value}}</router-link>
  </span>
</template>

<script>
export default {
  name: 'Input',
  props: ['field', 'value', 'model']
}
</script>

<style scoped>
</style>
