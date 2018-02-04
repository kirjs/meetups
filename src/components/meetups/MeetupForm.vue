<template>
  <el-card>
    <div>
      <span class="label">name: </span>
      <span class="value"><input v-model="editedItem.name"></span>
    </div>
    <div>
      <span class="label">description: </span>
      <span class="value"><textarea v-model="editedItem.description"></textarea></span>
    </div>

    <el-button :disabled="isPristine"   type="primary" @click="submit()">Update</el-button>
    <el-button type="secondary" @click="discardChanged()">Discard Changes</el-button>
  </el-card>
</template>

<script>
export default {
  name: 'MeetupForm',
  props: ['item'],
  computed: {
    isPristine () {
      return Object.keys(this.item).every(index => this.item[index] === this.editedItem[index])
    }
  },
  data () {
    return {
      editedItem: {...this.item}
    }
  },
  methods: {
    discardChanged () {
      this.$emit('update', this.item)
    },
    submit () {
      this.$emit('update', this.editedItem)
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
