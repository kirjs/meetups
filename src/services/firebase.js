import firebase from 'firebase'
import firebaseui from 'firebaseui'

const config = {
  apiKey: 'AIzaSyBkVaLr_AmLhiYXREJDVJmc3eOc7qwlZ_4',
  authDomain: 'events-ny.firebaseapp.com',
  databaseURL: 'https://events-ny.firebaseio.com',
  projectId: 'events-ny',
  storageBucket: 'events-ny.appspot.com',
  messagingSenderId: '858429515474'
}

firebase.initializeApp(config)

export default {
  // TODO: Find a way to not reuire passing a
  checkUserAuth ($router, callback = () => {}) {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        callback(user)
      } else {
        $router.push('/login')
      }
    })
  },
  uploadAvatar (uid, avatar, callback) {
    const ref = firebase.storage().ref().child('images/' + uid)
    ref.putString(avatar, 'data_url').then(callback, (e) => { debugger })
  },
  getAvatar (uid, callback) {
    firebase.storage().ref().child('images/' + uid).getDownloadURL().then(callback)
  },
  displayFirebaseAuth (selector) {
    const uiConfig = {
      signInSuccessUrl: '/start',
      signInOptions: [
        firebase.auth.GoogleAuthProvider.PROVIDER_ID,
        firebase.auth.EmailAuthProvider.PROVIDER_ID
      ]
    }
    const ui = new firebaseui.auth.AuthUI(firebase.auth())
    ui.start(selector, uiConfig)
  },
  firebase
}
