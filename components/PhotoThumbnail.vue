<template>
  <div class="thumbnail" :style="{ backgroundImage: 'url(' + photo.media.m + ')' }"></div>
</template>

<script>
export default {
  props: {
    photo: {
      type: Object,
      required: true
    }
  },

  data() {
    return {
      isLoading: false
    }
  }
}
</script>

<style scoped>
  .thumbnail{
    background-size: cover;
    background-position: 50% 50%;
    padding-top: 33.33334%;
  }
</style>
