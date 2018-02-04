<template>
  <div class = "user-info-form-wrapper">
    <div class="user-info-form">
      <div>
        <span class="label">Display name: </span>
        <span class="value"><input v-model="info.displayName"></span>
      </div>
      <div>
        <span class="label">Real name: </span>
        <span class="value"><input v-model="info.firstName"> <input v-model="info.lastName"> </span>
      </div>
      <div :v-if="info.twitter">
        <span class="label">twitter: </span>
        <span class="value">@<input v-model="info.twitter"></span>
      </div>
      <div :v-if="info.url">
        <span class="label">url: </span>
        <span class="value"><input v-model="info.url"></span>
      </div>
      <div :v-if="info.bio">
        <span class="label">bio: </span>
        <span class="value"><pre><input v-model="info.bio"></pre></span>
      </div>
    </div>
    <div>
      <el-button @click="update()">Update</el-button>
      <el-button @click="cancel()">Cancel</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'UserInfo',
  props: ['info'],
  data () {
    return {
      editedInfo: {...this.info}
    }
  },
  methods: {
    update () {
      this.$emit('update', this.editedIngo)
    },
    cancel () {
      this.$emit('cancel')
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
