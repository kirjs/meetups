<template>
  <div>
  <el-button v-if="canAddNewMeetups" @click="newMeetup()">Add a meetup</el-button>
  <div v-for="(item, index) in meetups" :key="index">
    <meetup v-if="editedKey!==item['.key']" :item="item" @edit="edit(item['.key'])"></meetup>
    <meetup-form v-if="editedKey===item['.key']" :item="item" @update="update($event, index)"></meetup-form>
  </div>
  </div>
</template>

<script>
import Meetup from '@/components/meetups/Meetup'
import MeetupForm from '@/components/meetups/MeetupForm'
import { mapGetters } from 'vuex'
import firebase from '@/services/firebase'
const meetupsRef = firebase.db.ref('meetups')

export default {
  name: 'Meetups',
  data () {
    return {
      editedKey: ''
    }
  },
  computed: {
    ...mapGetters(['meetups']),
    canAddNewMeetups () {
      return this.editedKey === ''
    }
  },
  created () {
    this.$store.dispatch('setMeetupsRef', meetupsRef)
  },
  methods: {
    create () {
      const ref = meetupsRef.push({name: '', description: ''})
      this.editedKey = ref.key
    },
    update (meetup) {
      this.$store.dispatch('meetup/update', { name: '', description: '' })
      const item = meetupsRef.child(meetup['.key'])
      if (meetup.name || meetup.description) {
        item.set({
          name: meetup.name,
          description: meetup.description
        })
      } else {
        item.remove()
      }
      this.editedKey = ''
    },
    edit (key) {
      this.editedKey = key
    }
  },
  components: {
    'meetup': Meetup,
    'meetup-form': MeetupForm
  }
}</script>

<style scoped>
</style>
