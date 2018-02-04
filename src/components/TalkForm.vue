<template>
  <el-card>
    <div>
      <span class="label">title: </span>
      <span class="value"><input v-model="editedTalk.title"></span>
    </div>
    <div>
      <span class="label">description: </span>
      <span class="value"><textarea v-model="editedTalk.description"></textarea></span>
    </div>

    <el-button :disabled="isPristine"   type="primary" @click="submit()">Update</el-button>
    <el-button type="secondary" @click="discardChanged()">Discard Changes</el-button>
  </el-card>
</template>

<script>
export default {
  name: 'TalkForm',
  props: ['talk'],
  computed: {
    isPristine () {
      return (this.talk.title === this.editedTalk.title) && (this.talk.description === this.editedTalk.description)
    }
  },
  data () {
    return {
      editedTalk: {...this.talk}
    }
  },
  methods: {
    discardChanged () {
      this.$emit('update', this.talk)
    },
    submit () {
      this.$emit('update', this.editedTalk)
    }
  }
}
</script>

<style scoped>
  input, textarea {
    width: 100%;
  }

  textarea {
    height: 150px;
  }
</style>
