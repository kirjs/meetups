<template>
  <div>
  <el-button v-if="canAddNewMeetups" @click="newMeetup()">Add a meetup</el-button>
  <div v-for="(item, index) in meetups" :key="index">
    <meetup v-if="editedIndex!==index" :item="item" @edit="edit(index)"></meetup>
    <meetup-form v-if="editedIndex===index" :item="item" @update="update($event, index)"></meetup-form>
  </div>
  </div>
</template>

<script>
import Meetup from '@/components/meetups/Meetup'
import MeetupForm from '@/components/meetups/MeetupForm'

export default {
  name: 'Meetups',
  data () {
    return {
      editedIndex: -1,
      meetups: [
        {
          name: 'AngularNYC',
          url: 'https://www.meetup.com/AngularNYC/',
          description: 'AngularNYC meetup'
        }, {
          name: 'ReactNYC',
          url: 'https://www.meetup.com/ReactNYC/',
          description: 'ReactNYC meetup'
        }
      ]
    }
  },
  computed: {
    canAddNewMeetups () {
      return this.editedIndex === -1
    }
  },
  methods: {
    newMeetup () {
      this.meetups.unshift({title: '', description: ''})
      this.editedIndex = 0
    },
    update (meetup, index) {
      if (meetup.title || meetup.description) {
        this.meetups.splice(index, 1, meetup)
      } else {
        this.meetups.splice(index, 1)
      }
      this.editedIndex = -1
    },
    edit (index) {
      this.editedIndex = index
    }
  },
  components: {
    'meetup': Meetup,
    'meetup-form': MeetupForm
  }
}</script>

<style scoped>
</style>
