import firebase from '@/services/firebase'

export default function (collection, updater) {
  firebase.db.ref(collection).on('value', (value) => {
    const val = value.val() || {}
    updater(Object.keys(val).map(key => ({...val[key], key: key})))
  })
}
