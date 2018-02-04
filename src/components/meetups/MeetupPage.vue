<template>
  <div>
    <el-card class="class">
      <h1>{{meetup.name}}</h1>
    </el-card>
    <events></events>
  </div>
</template>

<script>
import Events from '@/components/events/Events'

export default {
  name: 'MeetupPage',
  props: [],
  methods: {},
  data () {
    return {
      meetup: {
        name: 'AngularNYC',
        url: 'https://www.meetup.com/AngularNYC/',
        description: 'AngularNYC meetup'
      }
    }
  },
  components: {
    'events': Events
  }
}
</script>

<style scoped>
</style>
