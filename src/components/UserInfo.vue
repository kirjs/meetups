<template>
  <div>
    <div>
      <span class="label">Display name: </span>
      <span class="value">{{info.displayName}}</span>
    </div>
    <div>
      <span class="label">Real name: </span>
      <span class="value">{{info.firstName}} {{info.lastName}} </span>
    </div>
    <div :v-if="info.twitter">
      <span class="label">twitter: </span>
      <span class="value">@{{info.twitter}}</span>
    </div>
    <div :v-if="info.url">
      <span class="label">url: </span>
      <span class="value">{{info.url}}</span>
    </div>
    <div :v-if="info.bio">
      <span class="label">bio: </span>
      <span class="value"><pre>{{info.bio}}</pre></span>
    </div>
    <el-button type="primary" @click="edit()" >Edit</el-button>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  methods: {
    edit () {
      this.$emit('edit')
    }
  },
  props: ['info']
}
</script>

<style scoped>
  input, textarea {
    width: 100%;
  }

  textarea {
    height: 150px;
  }

  .label {
    width: 150px;
    display: inline-block;
  }

  pre {
    display: inline-block;
  }
</style>
