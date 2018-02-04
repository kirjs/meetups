<template>
  <div>
    <el-card>
      <user-profile></user-profile>
    </el-card>
    <talks></talks>
  </div>

</template>

<script>
import Picture from '@/components/Avatar'
import Talks from '@/components/Talks'
import UserProfile from './UserProfile.vue'
export default {
  name: 'Start',
  data () {
    return {}
  },
  methods: {
    login () {}
  },
  components: {
    UserProfile,
    'avatar': Picture,
    'talks': Talks
  }
}
</script>

<style scoped>

</style>
