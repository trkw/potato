<template>
  <li :class="{ 'isLoading': isLoading }" class="feed-item py2 container flex">
    <nuxt-link :to="{ name: 'photo-id', params: { id: index }}"
      @click="loadDetails" 
      class="thumbnail mr2" 
      :style="{ backgroundImage: 'url(' + photo.media.m + ')' }
      ">
    </nuxt-link>
    <div class="photo-info">
      <nuxt-link :to="{ name: 'photo-id', params: { id: index }}">
        <h2 class="photo-title">{{ photo.title }}</h2>
      </nuxt-link>
      <div class="flex">
        <a :href="`http://flickr.com/photos/${photo.author_id}`" class="photo-author mr2 mb1" target="_blank">{{ username }}</a>
        <span class="photo-date mr2 mb1">Published: {{ formattedDate }}</span>
        <a :href="photo.link" class="photo-link btn-sm mr2 mb1" role="button" target="_blank">View on Flickr</a>  
      </div>
    </div>
  </li>
</template>

<script>
import { dateHelpers, authorHelpers } from '~/assets/js/mixins.js'

export default {
  mixins: [dateHelpers, authorHelpers],

  props: {
    photo: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  },

  data () {
    return {
      isLoading: false
    }
  },

  methods: {
    loadDetails () {
      this.isLoading = true
    }
  }
}
</script>

<style scoped>
  
  .feed-item{
    align-items: center;
    flex-wrap: nowrap;
    &.isLoading{
      & .thumbnail{
        border-radius: 50px;
        opacity: 0;
        transform: rotate(100deg);
      }
    }
  }
  .thumbnail{
    background-size: cover;
    background-position: 50% 50%;
    padding-top: 33.33334%;
    flex: 0 0 200px;
    height: 200px;
    transition: all 0.4s ease-in;
  }
  .photo-info{
    min-width: 0; /* Hack to fix weird bug with flexbox and truncated text. See: https://css-tricks.com/flexbox-truncated-text/ */
  }
  .photo-title{
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    color: var(--white);
  }

  @media (--mq-xsmall) {
    .photo-date{
      order: 2;
      width: 100%;
    }
    .photo-author,
    .photo-link{
      flex: 1;
      flex: 1 0 auto;
    }
    .photo-author{
      order: 3;
    }
    .photo-link{
      order: 4;
    }
  }
</style>
