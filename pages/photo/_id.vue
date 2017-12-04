<template>
  <div class="inner container">
    <h2 class="pull-left"><a :href="photo.link" target="_blank">{{ photo.title }}</a></h2>
    <button class="btn pull-right" @click="$router.go(-1)">Back</button>
    <div class="photo-info container clear p1 mb2">
      <a :href="`http://flickr.com/photos/${photo.author_id}`" class="photo-author mr2 mb1" target="_blank">{{ username }}</a>| {{ formattedDate }}
    </div>
    <div class="container">
      <div class="sm-col-4 md-col-4">
        <div class="thumbnail mr2">
          <img :src="photo.media.m " alt="">
        </div>
      </div>
      <div class="sm-col-8 md-col-8" v-html="description"></div>
      <div v-if="tags.length" class="tags clear">
        Tags: <ul class="inline">
          <li v-for="tag in tags" :key="tag" class="pr1">
            <a :href="`https://www.flickr.com/photos/tags/${tag}`" target="_blank">{{ tag }}</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { dateHelpers, authorHelpers } from '~/assets/js/mixins.js'

export default {
  mixins: [dateHelpers, authorHelpers],

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
    },
    tags () {
      return this.photo.tags.split(' ')
    }
  }
}
</script>

<style scoped>
  .thumbnail{
    
  }
  .photo-info{
    background: var(--grey4);
  }
</style>
