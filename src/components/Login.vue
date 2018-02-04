<template>
  <div>
    Login
    <div id="firebaseui-auth-container"></div>
  </div>
</template>

<script>
import firebaseService from '../services/firebase'

export default {
  name: 'Login',
  mounted () {
    firebaseService.checkUserAuth(this.$router)
  },
  created () {
    firebaseService.displayFirebaseAuth('#firebaseui-auth-container')
  },
  data () {
    return {}
  },
  methods: {
    login () {}
  }
}
</script>

<style scoped>

</style>
