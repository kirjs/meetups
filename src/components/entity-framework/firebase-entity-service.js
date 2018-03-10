import firebase from '@/services/firebase'

class FirebaseRef {

  constructor (collection) {
    this.ref = firebase.db.ref(collection)
  }

  list (callback) {
    this.ref.on('value', value => {
      const val = value.val() || {}
      callback(Object.keys(val).map(key => ({...val[key], key: key})))
    })
  }

  update (value) {
    value = {...value}
    const key = value.key
    delete value.key
    this.ref.child(key).update(value)
  }

  new (value) {
    this.ref.push().set(value)
  }
}

export default class FirebaseEntityService {
  refs = {}

  ref (collection) {
    if (this.refs[collection]) {
      return this.refs[collection]
    }

    return this.refs[collection] = new FirebaseRef(collection)
  }
}
