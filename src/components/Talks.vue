<template>
  <div>
  <el-button v-if="canAddNewTalks" @click="newTalk()">Add a talk</el-button>

  <div v-for="(t, index) in talks" :key="index">
    <talk v-if="editedIndex!==index" :talk="t" @edit="edit(index)"></talk>
    <talk-form v-if="editedIndex===index" :talk="t" @update="update($event, index)"></talk-form>
  </div>
  </div>
</template>

<script>
import Talk from '@/components/Talk'
import TalkForm from '@/components/TalkForm'
export default {
  name: 'Talks',
  data () {
    return {
      editedIndex: -1,
      talks: [
        {
          title: 'Very good talk',
          description: 'Very good description'
        }, {
          title: 'Another greattalk',
          description: 'Also not bad'
        }
      ]
    }
  },
  computed: {
    canAddNewTalks () {
      return this.editedIndex === -1
    }
  },
  methods: {
    newTalk () {
      this.talks.unshift({title: '', description: ''})
      this.editedIndex = 0
    },
    update (talk, index) {
      if (talk.title || talk.description) {
        this.talks.splice(index, 1, talk)
      } else {
        this.talks.splice(index, 1)
      }
      this.editedIndex = -1
    },
    edit (index) {
      this.editedIndex = index
    }
  },
  components: {
    'talk': Talk,
    'talk-form': TalkForm
  }
}</script>

<style scoped>
</style>
