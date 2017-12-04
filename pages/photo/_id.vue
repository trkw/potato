<template>
  <div class="inner container">
    <h2 class="pull-left"><a :href="photo.link" target="_blank">{{ photo.title }}</a></h2>
    <button class="btn pull-right" @click="$router.go(-1)">Back</button>
    <div class="photo-info container clear mb2">
      {{ photo.author_id }} {{ formattedDate }}
    </div>
    <div class="sm-col-12 md-col-4">
      <div class="thumbnail mr2">
        <img :src="photo.media.m " alt="">
      </div>
    </div>
    <div class="sm-col-12 md-col-8" v-html="description"></div>
  </div>
</template>

<script>
import { dateHelpers } from '~/assets/js/mixins.js'

export default {
  mixins: [dateHelpers],

  async asyncData ({ store, params, app }) {
    const photo = store.state.photos[params.id]
    return { photo }
  },

  data () {
    return {
      // photo: this.$store.state.photos[]
    }
  },

  computed: {
    description () {
      const regex = /(?:.*?<\/p> ){2}(.*)/
      return this.photo.description.match(regex)[1]
    }
  }
}
</script>

<style scoped>
  .thumbnail{
    
  }
</style>
