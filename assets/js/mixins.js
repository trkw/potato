import moment from 'moment'

export const dateHelpers = {
  computed: {
    formattedDate () {
      return moment(this.photo.published).format('Do MMM YYYY [at] h:mm')
    }
  }
}

export const authorHelpers = {
  computed: {
    username () {
      const regex = /(?:"[^"]*"|^[^"]*$)/
      return this.photo.author.match(regex)[0].replace(/"/g, '')
    }
  }
}
