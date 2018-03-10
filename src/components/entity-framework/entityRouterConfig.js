import EntityRouteHandler from '@/components/entity-framework/EntityRouteHandler'

const entityRouterConfig = function ({routes, service}) {
  return routes.map(route => ({
    path: route.path,
    name: route.name,
    component: EntityRouteHandler,
    props () {
      return {
        collection: route.collection,
        schema: route.schema,
        service
      }
    }
  }))
}
export default entityRouterConfig
