<template>
  <span>
    <img :src="image" alt=""></span>
</template>

<script>
import firebaseService from '../../../../services/firebase'

export default {
  name: 'FieldDisplayPicture',
  props: ['field', 'value', 'model'],
  data () {
    return {
      image: ''
    }
  },
  mounted () {
    if (this.value) {
      firebaseService.getAvatar(this.value).then((url) => {
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
