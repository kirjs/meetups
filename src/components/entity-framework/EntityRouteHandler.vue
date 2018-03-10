<template>
    <generic-entity-list :schema="schema" :collection="collection" :filter="filter"
                         :service="service"></generic-entity-list>
</template>

<script>
import GenericEntityList from '@/components/entity-framework/GenericEntityList'

export default {
  name: 'EntityRouteHandler',
  props: ['schema', 'filter', 'config', 'collection', 'service'],
  components: {
    'generic-entity-list': GenericEntityList
  }
}
</script>

<style scoped>
</style>
