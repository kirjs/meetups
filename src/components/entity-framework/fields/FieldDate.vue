<template>
  <div>
    <el-date-picker v-model="value"  type="datetime" placeholder="Select date and time"></el-date-picker>
  </div>
</template>

<script>
import { abstractField } from 'vue-form-generator'

export default {
  created () {
    if (typeof this.value === 'string') {
      this.value = new Date(this.value)
    }
  },
  mixins: [abstractField]
}
</script>

<style scoped>
</style>
