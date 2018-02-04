<template>
  <el-card class="class">
    <div>
      <span class="label">title: </span>
      <span class="value">{{talk.title}}</span>
    </div>
    <div>
      <span class="label">description: </span>
      <span class="value">{{talk.description}}</span>
    </div>
    <el-button @click="edit()" type="primary">Edit</el-button>
  </el-card>
</template>

<script>
export default {
  name: 'Talk',
  props: ['talk'],
  methods: {
    edit () {
      this.$emit('edit')
    }
  }
}
</script>

<style scoped>
</style>
