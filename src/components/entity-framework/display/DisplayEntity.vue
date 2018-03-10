<template>
  <div class="field">
    <label>{{field.label}}:</label>
    <component :is="component" :field="field" :value="model[field.model]" :model="model" :schema="schema"></component>
  </div>
</template>

<script>

import allFields from '@/components/entity-framework/display/fields/allFields'

export default {
  name: 'Entity',
  props: ['model', 'schema', 'field'],
  computed: {
    component () {
      return allFields['field-display-' + this.field.type] || allFields['field-display-default']
    }
  },
  components: allFields
}
</script>

<style scoped>
  .field {
    display: flex;
  }

  .field label {
    width: 150px;
    text-align: right;
    padding-right: 20px;
  }
</style>
