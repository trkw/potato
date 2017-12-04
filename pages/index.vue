<template>

  <div class="flickr-feed inner">

    <error-list :errors="errors"></error-list>

    <header>
      <h2 v-if="pageDescription">{{ pageDescription }}</h2>
    </header>

    <!-- <input @blur="search" type="text" name="query" /> -->

    <transition name="fade">  
      <loading v-if="isLoading"></loading>

      <div v-else class="results-list">
        <ul>
          <flickr-feed-item
            :photo="photo"
            :index="index"
            v-for="(photo, index) in photos" 
            :key="index" 
          />
        </ul>
      </div>
    </transition>

  </div>

</template>

<script>
import ErrorList from '~/components/ErrorList.vue'
import Loading from '~/components/Loading.vue'
import FlickrFeedItem from '~/components/FlickrFeedItem.vue'

export default {
  data () {
    return {
      isLoading: false,
      pageDescription: 'Fetching photos...',
      apiUrl: 'https://api.flickr.com/services/feeds/photos_public.gne',
      apiParams: {
        format: 'json',
        tags: 'potato',
        tagmode: 'all',
        callbackQuery: 'cb',
        callbackName: 'jsonFlickrFeed'
      },
      errors: []
    }
  },

  created () {
    this.fetchRepos()
  },

  methods: {
    fetchRepos () {
      this.isLoading = true
      this.errors = []
      this.$jsonp(this.apiUrl, this.apiParams).then(response => {
        // Success.
        // console.log(response.items[0])
        this.$store.commit('setPhotos', {photos: response.items})

        this.isLoading = false
        this.errors = []
        this.pageDescription = response.title
      }).catch(err => {
        // Failed.
        this.isLoading = false
        this.errors.push(err.statusText)
      })
    },
    search (event) {
      this.apiParams.tags = event.target.value
      this.fetchRepos()
    }
  },

  computed: {
    photos () {
      return this.$store.state.photos
    }
  },

  components: {
    ErrorList,
    Loading,
    FlickrFeedItem
  }
}
</script>

<style scoped>
  .results-list{
    & li{
      list-style: none;
    }
  }
</style>
