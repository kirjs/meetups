<template>
  <span>
    <button @click="login()">login</button>
  </span>

</template>

<script>
export default {
  name: 'FieldDisplaySlide',
  props: ['field', 'model', 'schema', 'value'],

  methods: {
    login () {
      return this.$getGapiClient()
        .then(gapi => {
          gapi.auth2.getAuthInstance().signIn()
        })
    },
    create () {
      gapi.client.slides.presentations.create({
        title: 'Hello angular'
      }).then((response) => {
        console.log(`Created presentation with ID: ${response.result.presentationId}`)
      })
    },
    getSlides () {
      gapi.client.slides.presentations.get({
        presentationId: '1z8T7HmgeQyCC8sfQw7vMQsdQ47vqDl9pUaCDCMgopYo'
      }).then(function (response) {
        debugger
        var presentation = response.result
        var length = presentation.slides.length
        console.log('The presentation contains ' + length + ' slides:')
        for (i = 0; i < length; i++) {
          var slide = presentation.slides[i]
          console.log('- Slide #' + (i + 1) + ' contains ' +
            slide.pageElements.length + ' elements.')
        }
      }, function (response) {
        debugger
        console.log('Error: ' + response.result.error.message)
      })
    }
  },
  created () {
    this.login().then(() => {
//1vJIH7zveBz-Ct7EvLbYKoKEQ-5oD-xX29GPyGPHY2Zk
      this.$getGapiClient()
        .then(gapi => {
          debugger

        })
    })

  }

}


</script>

<style scoped>
</style>
