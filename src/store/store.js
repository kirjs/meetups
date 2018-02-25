import Vuex from 'vuex'
import { firebaseMutations } from 'vuexfire'
import meetup from './modules/meetup'

export default function createStore () {
  return new Vuex.Store({
    strict: true,
    mutations: {...firebaseMutations},
    modules: {
      meetup
    }
  })
}
