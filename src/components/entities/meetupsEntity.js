export default {
  id: 'meetups',
  path: '/meetups',
  name: 'meetups',
  collection: 'meetups',
  schema: {
    fields: [
      {
        type: 'input',
        inputType: 'text',
        label: 'name',
        model: 'name'
      },
      {
        type: 'input',
        inputType: 'text',
        label: 'description',
        model: 'description'
      },
      {
        type: 'color',
        label: 'Meetup Color',
        model: 'color'
      },
      {
        type: 'entity',
        entityId: 'events',
        label: 'events',
        key: 'meetup'
      }
    ]
  }
}
