<template>
  <speaker-card :image="image" :userInfo="user" :talk="this.model" :config="configs.big"></speaker-card>
</template>
<script>
import SpeakerCard from '@/components/helpers/SpeakerCard'
import firebaseService from '../../services/firebase'

function getBase64FromImageUrl (url) {
  return new Promise((resolve, reject) => {
    const img = new Image()
    img.setAttribute('crossOrigin', 'anonymous')

    img.onload = function () {
      const canvas = document.createElement('canvas')
      canvas.width = this.width
      canvas.height = this.height

      const ctx = canvas.getContext('2d')
      ctx.drawImage(this, 0, 0)

      const dataURL = canvas.toDataURL('image/png')

      resolve(dataURL)
    }

    img.src = url
  })
}

export default {
  props: ['model', 'schema'],
  computed: {
    user () {
      const userField = this.schema.fields.find(a => a.model === 'speaker')
      const context = userField.context || []
      const user = context.find(a => a.key === this.model.speaker) || {}
      return {
        displayName: user.displayName,
        firstName: user.firstName,
        lastName: user.lastName,
        twitterHandle: '',
        url: user.url,
        bio: user.bio,
        avatar: user.avatar,
        image: ''
      }
    }
  },
  created () {
    if (this.user.avatar) {
      firebaseService.getAvatar(this.user.avatar).then((url) => {
        getBase64FromImageUrl(url).then((base64) => {
          this.image = base64
        })
      })
    }
  },
  data () {
    return {
      image: '',
      configs: {
        big: {
          color: '#e61e25',
          width: 800,
          height: 400
        },
        small: {
          color: '#e61e25',
          width: 300,
          height: 150
        }
      }
    }
  },
  components: {
    'speaker-card': SpeakerCard
  }
}
</script>
