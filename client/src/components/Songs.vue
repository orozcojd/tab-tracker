<template>
  <v-layout>
    <v-flex xs6 offset-xs3>
      <panel title="Songs">
        <v-btn class="cyan accent-5"
          to="/songs/create"
          slot="action"
          light
          fab
          medium
          absolute
          right
          middle>
          <v-icon>add</v-icon>
          </v-btn>
        <div
          v-for="(song, count) in songs" :key="count"
          class="song">
          <v-layout>
            <v-flex xs6>
              <div class="song-title">
                {{song.title}}
              </div>
              <div class="song-artist">
                {{song.artist}}
              </div>
              <div class="song-genre">
                {{song.genre}}
              </div>
              <v-btn
                dark
                class="cyan"
                @click="navigateTo({
                  name: 'song',
                  params: {
                    songId: song.id
                    }
                })">
                View Song
              </v-btn>
            </v-flex>
            <v-flex xs6>
              <img :src="song.albumImageUrl" alt="album-image" class="album-image">
            </v-flex>
          </v-layout>
        </div>
      </panel>
    </v-flex>
  </v-layout>
</template>

<script>
// import { mapActions, mapGetters } from 'vuex'
import SongService from '@/services/SongService'
import Panel from '@/components/Panel'
export default {
  name: 'Songs',
  components: {
    Panel
  },
  data () {
    return {
      songs: null
    }
  },
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  },
  async mounted () {
    this.songs = (await SongService.index()).data
  }
}
</script>

<style scoped>
  .song {
    padding: 20px;
    height: 330px;
    overflow: hidden;
  }
  .song-title {
    font-size: 30px;
  }
  .song-artist {
    font-size: 24px;
  }
  .song-genre {
    font-size: 18px;
  }
  .album-image {
    width: 70%;
    margin: 0 auto;

  }
</style>
