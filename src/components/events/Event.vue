<template>
  <el-card class="class">
    <div>
      <span class="label">Name: </span>
      <span class="value">{{item.name}}</span>
    </div>
    <div>
      <span class="label">Description: </span>
      <span class="value">{{item.description}}</span>
    </div>
    <div>
      <span class="label">Date/Time: </span>
      <span class="value">{{item.date}}</span>
    </div>
    <el-button @click="edit()" type="primary">Edit</el-button>
  </el-card>
</template>

<script>
export default {
  name: 'Event',
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
