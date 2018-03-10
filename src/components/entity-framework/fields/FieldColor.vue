<template>
  <div>
    <el-color-picker v-model="value"></el-color-picker>
  </div>
</template>

<script>
import { abstractField } from 'vue-form-generator'

export default {
  mixins: [abstractField]
}
</script>
