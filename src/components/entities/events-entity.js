export default {
  path: '/events',
  name: 'Events',
  collection: 'events',
  schema: {
    fields: [
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
        collection: 'meetups',
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
