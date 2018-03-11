export default {
  id: 'slides',
  path: '/slides',
  name: 'slides',
  collection: 'slides',
  schema: {
    fields: [
      {
        type: 'input',
        inputType: 'text',
        label: 'Display name',
        model: 'displayName',
        url: 'slides'
      },
      {
        type: 'link',
        entityId: 'events',
        displayKey: 'title',
        label: 'event',
        model: 'event'
      },
      {
        type: 'slides',
        displayKey: 'title',
        label: 'slides',
        model: 'slides'
      }
    ]
  }
}
