<template>
  <span>
    <span v-if="!this.field.routerLink">{{val}}</span>
    <router-link :to="this.field.routerLink + '' + value" v-if="this.field.routerLink">{{val}}</router-link>
  </span>
</template>

<script>
export default {
  name: 'Select',
  props: ['field', 'value'],
  computed: {
    val () {
      return ((this.field && this.field.values && this.field.values.find(a => a.id === this.value)) || {name: 'No value'}).name
    }
  }
}
</script>

<style scoped>
</style>
