<template>
  <div class="wrapper">{{value}}</div>
</template>

<script>
export default {
  name: 'Textarea',
  props: ['field', 'value']
}
</script>

<style scoped>
  .wrapper {
    flex: 1;
    white-space: pre-line;
  }
</style>
