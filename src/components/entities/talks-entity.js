export default {
  fields: [
    {
      type: 'input',
      inputType: 'text',
      label: 'title',
      model: 'title'
    },
    {
      type: 'textArea',
      inputType: 'text',
      label: 'description',
      model: 'description'
    },
    {
      type: 'link',
      collection: 'events',
      displayKey: 'title',
      label: 'event',
      model: 'event',
    },
    {
      type: 'link',
      collection: 'userInfo',
      displayKey: 'displayName',
      label: 'speaker',
      model: 'speaker',
    },
    /*
    {
      type: 'select',
      label: 'event',
      model: 'event',
      routerLink: 'event/',
      values: [],
      context: []
    },
    {
      type: 'select',
      label: 'speaker',
      model: 'speaker',
      routerLink: 'users/',
      values: [],
      context: []
    } */
  ]
}
