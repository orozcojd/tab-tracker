import Api from '@/services/Api'

export default {
  index () {
    /* index used for /songs */
    return Api().get('songs')
  },
  post (song) {
    return Api().post('songs', song)
  }
}
