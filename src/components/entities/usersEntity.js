export default {
  id: 'users',
  path: '/users',
  name: 'users',
  collection: 'userInfo',
  schema: {
    fields: [
      {
        type: 'input',
        inputType: 'text',
        label: 'Display name',
        model: 'displayName',
        url: 'users'
      },
      {
        type: 'input',
        inputType: 'text',
        label: 'First name',
        model: 'firstName'
      },
      {
        type: 'input',
        inputType: 'text',
        label: 'Last name',
        model: 'lastName'
      },
      {
        type: 'input',
        inputType: 'text',
        label: 'twitter',
        model: 'twitter'
      },
      {
        type: 'input',
        inputType: 'text',
        label: 'url',
        model: 'url'
      },
      {
        type: 'input',
        inputType: 'text',
        label: 'bio',
        model: 'bio'
      },
      {
        type: 'picture',
        label: 'Avatar',
        model: 'avatar'
      },
      {
        type: 'entity',
        entityId: 'talks',
        label: 'talks',
        key: 'speaker'
      }
    ]
  }
}
