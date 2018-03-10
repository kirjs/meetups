import EntityRouteHandler from '@/components/entity-framework/EntityRouteHandler'

const entityRouterConfig = function ({entities, service}) {

  entities.forEach(entity => entity.schema.fields.forEach(field => {
    if (typeof field.entityId === 'string') {
      const entity = entities.find(entity => entity.id === field.entityId)
      if (!entity) {
        throw new Error('Incorrect entity', field.entityId, 'for the field', field)
      }
      field.entity = entity
      field.service = service // TODO: that's a hack
    }
  }))

  return entities.map(route => {
    function props (a) {
      return {
        collection: route.collection,
        schema: route.schema,
        service,
        filter: {...a.params}
      }
    }

    return {
      path: route.path,
      name: route.name,
      component: EntityRouteHandler,
      props,
      children: [{
        path: ':key',
        component: EntityRouteHandler,
        props
      }]
    }
  })
}
export default entityRouterConfig
