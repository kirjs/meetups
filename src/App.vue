<template>
  <div id="app">
    <el-container>
      <el-header>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="handleSelect">
          <el-menu-item index="meetups">Meetups</el-menu-item>
          <el-menu-item index="events">Events</el-menu-item>
          <el-menu-item index="users">Users</el-menu-item>
          <el-menu-item index="talks">Talks</el-menu-item>
        </el-menu>
      </el-header>
      <router-view :key="$route.name + ($route.params.id || '')"/>
    </el-container>
  </div>
</template>

<script>
import ElHeader from '../node_modules/element-ui/packages/header/src/main.vue'

export default {
  data () {
    return {
      activeIndex: 'meetups'
    }
  },
  methods: {
    handleSelect (a, b, c) {
      this.$router.push('/' + a)
    }
  },
  components: {ElHeader},
  name: 'App'
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #2c3e50;
  }
</style>
