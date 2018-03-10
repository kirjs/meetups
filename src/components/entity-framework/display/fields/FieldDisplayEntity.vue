<template>
  <div>
    <generic-entity-list :schema="this.field.entity.schema" :collection="this.field.entity.collection" :filter="filter"
                         :service="this.field.service"></generic-entity-list>

  </div>
</template>
<script>

export default {
  name: 'FieldDisplayEntity',
  data () {
    return {

      filter: {
        [this.field.key]: this.model.key
      }
    }
  },
  props: ['field', 'value', 'schema', 'model']
}
</script>

<style scoped>
</style>
