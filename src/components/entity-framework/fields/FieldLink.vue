<template>
  <div>
    <el-select v-model="value" :multiple="this.schema.multiple" filterable placeholder="Select">
      <el-option
        v-for="item in schema.context"
        :key="item.key"
        :label="item[schema.displayKey]"
        :value="item.key">
      </el-option>
    </el-select>
  </div>

</template>

<script>
import { abstractField } from 'vue-form-generator'

export default {
  mixins: [abstractField],
  created () {
  }
}
</script>

<style scoped>
</style>
