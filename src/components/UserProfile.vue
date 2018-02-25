<template>
    <div class="wrapper">
      <avatar />
      <user-info v-if="!editMode" :info="userInfo" @edit="toggleEdit()"></user-info>
      <user-info-form v-if="editMode" :info="userInfo" @cancel="toggleEdit()" @update="toggleEdit()"></user-info-form>
      <div>
      <speaker-card :userInfo="userInfo" :config="configs.big"></speaker-card>
      <speaker-card :userInfo="userInfo" :config="configs.small"></speaker-card>
      </div>
    </div>
</template>

<script>
import Avatar from '@/components/Avatar'
import UserInfo from '@/components/UserInfo'
import UserInfoForm from '@/components/UserInfoForm'
import SpeakerCard from '@/components/SpeakerCard'

export default {
  name: 'UserProfile',
  props: ['uid'],
  data () {
    return {
      editMode: false,
      configs: {
        big: {
          color: '#43b884',
          width: 600,
          height: 300
        },
        small: {
          color: '#43b884',
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
    'avatar': Avatar,
    'user-info': UserInfo,
    'user-info-form': UserInfoForm,
    'speaker-card': SpeakerCard
  }
}
</script>

<style scoped>
  .wrapper {
    display: flex;
  }
</style>
