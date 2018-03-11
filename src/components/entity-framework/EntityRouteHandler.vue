<template>
  <generic-entity-card-list :schema="schema" :collection="collection" :filter="filter"
                            :service="service"></generic-entity-card-list>
</template>

<script>
import GenericEntityCardList from '@/components/entity-framework/GenericEntityCardList'

export default {
  name: 'EntityRouteHandler',
  props: ['schema', 'filter', 'config', 'collection', 'service'],
  components: {
    'generic-entity-card-list': GenericEntityCardList
  }
}
</script>

<style scoped>
</style>
