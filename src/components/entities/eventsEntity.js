export default {
  id: 'events',
  path: '/events',
  name: 'Events',
  collection: 'events',
  schema: {
    fields: [
      {
        type: 'key',
        label: 'key',
        path: 'events',
        model: 'key'
      },
      {
        type: 'input',
        inputType: 'text',
        label: 'title',
        model: 'title'
      },
      {
        type: 'textArea',
        label: 'description',
        rows: 20,
        model: 'description'
      },
      {
        type: 'link',
        entityId: 'meetups',
        displayKey: 'name',
        label: 'meetup',
        model: 'meetup'
      },
      {
        type: 'date',
        model: 'date',
        label: 'date'
      }
    ]
  }
}
