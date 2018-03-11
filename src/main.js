// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import createStore from './store/store'
import Vuex from 'vuex'
import VueGAPI from 'vue-gapi'

Vue.config.productionTip = false

const apiConfig = {
  clientId: '858429515474-1ogs1ct0ggdoa305muv11adrq4ljrvp7.apps.googleusercontent.com',
  apiKey: 'AIzaSyBJzvzCWH-aUvJJutggZlAehq18TzM4IKk',
  discoveryDocs: ['https://slides.googleapis.com/$discovery/rest?version=v1'],
  scope: 'https://www.googleapis.com/auth/presentations'
}

Vue.use(VueGAPI, apiConfig)
Vue.use(Vuex)
Vue.use(ElementUI)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store: createStore(),
  computed: Vuex.mapGetters(['meetups']),
  components: {App},
  template: '<App/>'
})
