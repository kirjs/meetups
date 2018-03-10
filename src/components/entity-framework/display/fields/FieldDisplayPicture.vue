<template>
  <span><img :src="image" alt=""></span>
</template>

<script>
import firebaseService from '../../../../services/firebase'

export default {
  name: 'FieldDisplayPicture',
  props: ['field', 'value'],
  data () {
    return {
      image: ''
    }
  },
  mounted () {
    if (this.value) {
      firebaseService.getAvatar(this.value, (url) => {
        this.image = url
      })
    }
  }
}
</script>

<style scoped>
  img {
    width: 100px;
    height: 100px;
  }
</style>
