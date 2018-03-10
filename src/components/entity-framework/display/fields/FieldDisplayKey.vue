<template>
  <span>
    <router-link :to="field.path + '/'+ value"><i class="el-icon-view"></i></router-link>
  </span>
</template>

<script>
export default {
  name: 'FieldDisplayLink',
  props: ['field', 'model', 'schema', 'value']
}
</script>

<style scoped>
</style>
