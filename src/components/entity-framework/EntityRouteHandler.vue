<template>
  <div>
    <generic-entity-list :schema="schema" :collection="collection" :parentKey="parentKey"
                          :parentValue="parentValue" :service="service"></generic-entity-list>
  </div>
</template>

<script>
import GenericEntityList from '@/components/entity-framework/GenericEntityList'

export default {
  name: 'EntityRouteHandler',
  props: ['schema', 'id', 'config', 'collection', 'service'],
  computed: {
    parentKey () {
      return this.id ? 'id' : ''
    },
    parentValue () {
      return this.id || ''
    }
  },
  components: {
    'generic-entity-list': GenericEntityList
  }
}
</script>

<style scoped>
</style>
