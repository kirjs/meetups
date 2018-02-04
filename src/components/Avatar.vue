<template>
  <div class = "avatar-wrapper">
    <div class = "avatar">
      <img :src="image">
    </div>

    <div v-if="isEditing" class = "controls">
      <el-button @click="uploadFile()" type="primary" icon="el-icon-upload">Update</el-button>
      <el-button v-if="isEditing" @click="clear()" type="secondary" icon="el-icon-close">Clear</el-button>
    </div>
    <input type="file" :disabled="isSaving" @change="onFileChange($event)" accept="image/*" v-if="!isEditing">
  </div>
</template>

<script>
import firebaseService from '../services/firebase'

const loadingImage = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAACSklEQVRYR7WXjU3DMBCFXycANqATABvABMAEwATQCYAJgAkoE9AN2g2ACegGdAPQF/msk4kTp41PqgKJ7Xv37tcTDZdjSfwOJe2F51c45lMSv3XpsZPChSi7lXQRFPZtA8SLpIWkTdfiPgD7ku4l3fVpzHxH+UzSPLe/CwA0v2csxkIOh2rYQU47QK4kXbaxkQNwLek1OZBD3npoxUXnktifCqBvQozEb20AOATLTbASGvFnqcAKBqSswNrUM5ECgPalJHyPZKkrRPIQYsgvh4kTe5EC+AgpxncCB8p2lTZ3PgdW5QH4haA860uhAchwRxoXuGLtAXy7iIYiQIwluBR2LWMiwwaAYMH3Y1Kfgm9zxdQAPLli01AzlunJOZ5lPs0MgAUfqUbBqCXeUHQsDMBv0Ei+E6G1JK0xmxQAkU/u1xIfa40OAPiXtQFQ6HB3FACQIj/hzcGIud/GotcVGeAPi4HaDKDLF6W5xYClBxkwpOlsGyuAoLOuDADdjwiNNXrbkwv3MeA02WYArEpRgChENcWmLFI+AuAlbuBZOw5o0bi56TW+GVnvpg4AooZgIP6P1dYD8CzUCsYYfGZdOpBYqWR0goUxWzJxdmSDSA4A761hjAkC5dwr/g05uanYigUgcMcu/YGUu8pNWF33AjbCBkLOPg4s09R99mMEs2XrDanvZmSH0LA4gEGVCpaLDQKZtVjME9Cd7b0PgMUKwcmhPBHAGAi7HaEcwPzPvRCwnffCtA6U5L1ZiKJUUEysDBrnShkoAbfVmj+mv4PrMO4mUAAAAABJRU5ErkJggg=='

export default {
  name: 'Picture',
  data () {
    return {
      image: loadingImage,
      isSaving: false,
      initialImage: loadingImage
    }
  },
  computed: {
    isEditing () {
      return this.image !== this.initialImage
    }
  },
  mounted () {
    firebaseService.checkUserAuth(this.$router, ({uid}) => {
      firebaseService.getAvatar(uid, (url) => {
        this.initialImage = url
        this.image = url
      })
    })
  },
  methods: {
    clear () {
      this.image = this.initialImage
    },

    onFileChange (e) {
      const files = e.target.files || e.dataTransfer.files
      if (!files.length) {
        return
      }

      this.createImage(files[0])
    },
    createImage (file) {
      const reader = new FileReader()
      this.isSaving = true

      reader.onload = (e) => {
        this.image = e.target.result
        this.isSaving = false
      }
      reader.readAsDataURL(file)
    },
    uploadFile () {
      firebaseService.checkUserAuth(this.$router, ({uid}) => {
        firebaseService.uploadAvatar(uid, this.image, () => {
          this.initialImage = this.image
        })
      })
    }
  }
}
</script>

<style scoped>
.avatar-wrapper {
  width: 225px;
}

.controls {
  margin-top: 20px;
}

.avatar, img {
  margin: auto;
  width: 150px;
  height: 150px;
  border: 1px solid #000;
  border-radius: 50%;
  line-height: 150px;
}
</style>
