<template>
  <div>
    <svg version="1.1" ref="svg" :width="config.width" :height="config.height" text-rendering="optimizeLegibility"
         xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
      <defs>
        <pattern id="image" x="0" y="0" patternUnits="userSpaceOnUse" :height="radius * 2" :width="radius * 2">
          <image :width="radius * 2"  y="0" crossorigin="anonymous" :xlink:href="image"></image>
        </pattern>
      </defs>
      <rect x="0" y="0" :width="config.width" :height="config.height" fill="white"></rect>
      <rect :x="radius" :y="padding" :width="config.width - radius" :height="panelHeight" :fill="config.color"/>
      <circle :cx="radius" :cy="radius" :r="radius" :fill="config.color"/>
      <circle :cx="radius" :cy="radius" :r="radius - 5" fill="url(#image)"/>
      <text style="font-family: 'Avenir', Helvetica, Arial, sans-serif;font-weight: 300;" :x="textStartX"
            :y="panelHeight + 1" stroke="white" fill="white" :font-size="panelHeight * 0.8">{{userInfo.displayName}}
      </text>
      <foreignObject :x="textStartX" :y="textStartY" :width="textWidth" height="200" style="overflow: hidden">
        <div
          :style="titleStyle"
          xmlns="http://www.w3.org/1999/xhtml" class="title">{{talk.title}}
        </div>
        <div
          :style="descriptionStyle"
          xmlns="http://www.w3.org/1999/xhtml" class="description">{{talk.description}}
        </div>
      </foreignObject>
      <rect :x="radius - panelHeight / 2" :y="radius * 2 + padding" :width="panelHeight" :height="padding / 2.5" :fill="config.color"></rect>
      <text :y="metaStartY" :style="metaStyle" :x="radius" text-anchor="middle">{{userInfo.twitterHandle || userInfo.url || ''}}</text>
      <text :y="metaStartY" :style="metaStyle" :x="textStartX">{{event.date}}</text>
      <text :y="metaStartY" :style="metaStyle" :x="config.width - padding * 2" text-anchor="end">{{meetup.title}}</text>
    </svg>
    <el-button @click="toPng()">To PNG</el-button>
  </div>
</template>

<script>
import svgToPng from '../../services/svg2png'
const fontFamily = 'font-family: \'Avenir\', Helvetica, Arial, sans-serif;'

export default {
  name: 'SpeakerCard',
  props: ['userInfo', 'config', 'talk', 'image'],
  computed: {
    padding () {
      return this.config.height / 30
    },
    radius () {
      return this.config.height / 3
    },
    panelHeight () {
      return this.config.height / 30 * 4
    },
    textStartX () {
      return this.radius * 2 + this.padding * 2
    },
    textWidth () {
      return this.config.width - this.textStartX - this.padding * 2
    },
    textStartY () {
      return this.padding * 2 + this.panelHeight
    },
    titleStyle () {
      const fontSize = this.padding * 1.4 * 1.5
      return fontFamily + `font-weight: 600;font-size: ${fontSize}px;line-height:${fontSize * 1.3}px;margin-bottom: ${this.padding * 0.8}px;`
    },
    descriptionStyle () {
      const fontSize = this.padding * 1.2 * 2
      return fontFamily + 'font-weight: r3600;font-size: ' + fontSize + 'px;line-height: ' + (fontSize * 1.4) + 'px;margin-bottom: 10px;'
    },
    metaStyle () {
      const fontSize = this.padding * 1.2
      return fontFamily + `text-align: center;font-size: ${fontSize}px;line-height: 16px;`
    },
    metaStartY () {
      return this.textStartY + this.padding * 18
    }
  },
  data () {
    return {
      event: {
        date: ''
      },
      meetup: {
        title: ''
      }
    }
  },
  methods: {
    toPng () {
      svgToPng(this.$refs.svg.outerHTML, a => { })
    }
  }
}
</script>

<style scoped>
</style>
