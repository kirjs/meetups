<template>
  <div>
  <el-button v-if="canAddNewEvents" @click="newEvent()">Add a event</el-button>
  <div v-for="(item, index) in events" :key="index">
    <event v-if="editedIndex!==index" :item="item" @edit="edit(index)"></event>
    <event-form v-if="editedIndex===index" :item="item" @update="update($event, index)"></event-form>
  </div>
  </div>
</template>

<script>
import Event from '@/components/events/Event'
import EventForm from '@/components/events/EventForm'

export default {
  name: 'Events',
  data () {
    return {
      editedIndex: -1,
      events: [
        {
          name: 'February event',
          description: 'February event',
          date: [ '2018-02-22T05:18:00.000Z', '2018-02-22T05:21:00.000Z' ]
        }
      ]
    }
  },
  computed: {
    canAddNewEvents () {
      return this.editedIndex === -1
    }
  },
  methods: {
    newEvent () {
      this.events.unshift({title: '', description: ''})
      this.editedIndex = 0
    },
    update (event, index) {
      if (event.title || event.description) {
        this.events.splice(index, 1, event)
      } else {
        this.events.splice(index, 1)
      }
      this.editedIndex = -1
    },
    edit (index) {
      this.editedIndex = index
    }
  },
  components: {
    'event': Event,
    'event-form': EventForm
  }
}</script>

<style scoped>
</style>
