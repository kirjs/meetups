import { firebaseAction } from 'vuexfire'

const setMeetupsRef = firebaseAction(({bindFirebaseRef}, {ref}) => {
  bindFirebaseRef('meetups', ref)
})

export default {
  state: {
    meetups: []
  },

  getters: {
    meetups: state => state.meetups
  },

  actions: {
    setMeetupsRef
  }
}
