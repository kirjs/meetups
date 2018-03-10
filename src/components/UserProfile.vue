<template>
    <div class="wrapper">
      <user-info v-if="!editMode" :info="userInfo" @edit="toggleEdit()"></user-info>
      <user-info-form v-if="editMode" :info="userInfo" @cancel="toggleEdit()" @update="toggleEdit()"></user-info-form>
      <div>
      <speaker-card :userInfo="userInfo" :config="configs.big"></speaker-card>
      <speaker-card :userInfo="userInfo" :config="configs.small"></speaker-card>
      </div>
    </div>
</template>

<script>
import UserInfo from '@/components/UserInfo'
import UserInfoForm from '@/components/UserInfoForm'

export default {
  name: 'UserProfile',
  props: ['uid'],
  data () {
    return {
      editMode: false,
      configs: {
        big: {
          color: '#e61e25',
          width: 600,
          height: 300
        },
        small: {
          color: '#e61e25',
          width: 300,
          height: 150
        }
      },
      userInfo: {
        displayName: 'Задай вопрос Эвану Ю',
        firstName: 'John',
        lastName: 'Smith',
        twitterHandle: '',
        url: '',
        bio: 'John\nis\nSMith'
      }
    }
  },
  methods: {
    toggleEdit () {
      this.editMode = !this.editMode
    }
  },
  components: {
    'user-info': UserInfo,
    'user-info-form': UserInfoForm
  }
}
</script>

<style scoped>
  .wrapper {
    display: flex;
  }
</style>
