import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      photos: []
    },
    mutations: {
      setPhotos (state, { photos }) {
        state.photos = photos
      }
    }
  })
}

export default createStore
