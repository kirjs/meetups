<template>
  <div>
    <generic-entity-card-list :component="component" :schema="this.field.entity.schema"
                              :collection="this.field.entity.collection" :filter="filter"
                              :service="this.field.service"></generic-entity-card-list>

  </div>
</template>
<script>

export default {
  name: 'FieldDisplayEntity',
  displayFull: false,
  data () {
    return {
      component: {
        props: ['model'],
        template: '<div>{{model.title}}</div>'
      },
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
