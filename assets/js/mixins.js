import moment from 'moment'

export const dateHelpers = {
  computed: {
    formattedDate () {
      return moment(this.photo.published).format('Do MMM YYYY [at] h:mm')
    }
  }
}
