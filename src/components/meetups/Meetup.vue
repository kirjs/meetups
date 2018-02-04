<template>
  <el-card class="class">
    <div>
      <span class="label">name: </span>
      <span class="value">{{item.name}}</span>
    </div>
    <div>
      <span class="label">description: </span>
      <span class="value">{{item.description}}</span>
    </div>
    <el-button @click="edit()" type="primary">Edit</el-button>
  </el-card>
</template>

<script>
export default {
  name: 'Meetup',
  props: ['item'],
  methods: {
    edit () {
      this.$emit('edit')
    }
  }
}
</script>

<style scoped>
</style>
