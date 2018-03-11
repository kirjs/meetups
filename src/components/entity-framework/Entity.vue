<template>
  <el-card style="margin-top:10px">
    <div slot="header">
      <span></span>
      <button @click='editMode = !editMode' style="float: right; "><i class="el-icon-edit"></i></button>
    </div>
    <div v-if='editMode'>
      <vue-form-generator :schema='schema' :model='model'>
      </vue-form-generator>
      <button @click='$emit("update", model);editMode = !editMode'>done</button>
    </div>
    <div v-if='!editMode'>
      <div v-for='field in schema.fields' :key='field.model'>
        <display-field :field="field" :model="model" :schema="schema"></display-field>
      </div>
    </div>
  </el-card>
</template>

<script>
import 'vue-form-generator/dist/vfg.css'
import VueFormGenerator from 'vue-form-generator/dist/vfg.js'
import DisplayEntity from '@/components/entity-framework/display/DisplayEntity'

export default {
  name: 'Entity',
  props: ['model', 'schema'],
  data () {
    return {
      editMode: false
    }
  },
  components: {
    'vue-form-generator': VueFormGenerator.component,
    'display-field': DisplayEntity
  },
  methods: {
    edit () {
      this.$emit('edit')
    }
  }
}
</script>

<style scoped>
</style>
