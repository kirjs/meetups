export default {
  id: 'talks',
  path: '/talks',
  name: 'Talks',
  collection: 'talks',
  schema: {
    fields: [
      {
        type: 'input',
        inputType: 'text',
        label: 'title',
        model: 'displayName',
        url: 'talks'
      },
      {
        type: 'textArea',
        inputType: 'text',
        label: 'description',
        model: 'description'
      },
      {
        type: 'link',
        entityId: 'events',
        displayKey: 'title',
        label: 'event',
        model: 'event'
      },
      {
        type: 'link',
        entityId: 'users',
        displayKey: 'displayName',
        label: 'speaker',
        model: 'speaker'
      }
    ]
  }
}
