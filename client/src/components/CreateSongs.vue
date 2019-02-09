<template>
<v-layout>
  <v-flex xs4>
    <panel title="Song Metadata">
        <v-text-field
          required
          :rules="[required]"
          label="Title*"
          type="text"
          name="title"
          v-model="song.title">
        </v-text-field>
        <v-text-field
          required
          :rules="[required]"
          label="Artist*"
          type="text"
          name="artist"
          v-model="song.artist">
        </v-text-field>
        <v-text-field
          required
          :rules="[required]"
          label="Genre*"
          type="text"
          name="genre"
          v-model="song.genre">
        </v-text-field>
        <v-text-field
          required
          :rules="[required]"
          label="Album*"
          type="text"
          name="album"
          v-model="song.album">
        </v-text-field>
        <v-text-field
          required
          :rules="[required]"
          label="Album Image Url*"
          type="text"
          name="albumUrl"
          v-model="song.albumImgUrl">
        </v-text-field>
        <v-text-field
          required
          :rules="[required]"
          label="YouTube ID*"
          type="text"
          name="youtubeId"
          v-model="song.youtubeId">
        </v-text-field>
      </panel>
    </v-flex>
    <v-flex xs8>
      <panel title="Song Structure" class="ml-4">
        <v-textarea
          required
          :rules="[required]"
          label="Lyrics*"
          multi-line
          name="lyrics"
          v-model="song.lyrics">
        </v-textarea>
        <v-textarea
          required
          :rules="[required]"
          label="Tab*"
          multi-line
          name="tab"
          v-model="song.tab">
        </v-textarea>
      </panel>
      <div class="danger-alert" v-if="error">
        {{ error }}
      </div>
      <v-btn
        dark
        class="cyan"
        @click="create">
        Create Song
      </v-btn>
    </v-flex>
  </v-layout>
</template>
<script>
import Panel from '@/components/Panel'
import SongService from '@/services/SongService'
export default {
  name: 'CreateSongs',
  data () {
    return {
      song: {
        title: null,
        artist: null,
        genre: null,
        album: null,
        albumImgUrl: null,
        youtubeId: null,
        lyrics: null,
        tab: null
      },
      required: (value) => !!value || 'Required.',
      error: null
    }
  },
  components: {
    Panel
  },
  methods: {
    async create () {
      this.error = null
      const allFieldsFilled = Object
        .keys(this.song)
        .every(key => !!this.song[key])
      if (!allFieldsFilled) {
        this.error = 'Please fill in all the required fields.'
        return
      }
      try {
        await SongService.post(this.song)
        this.$router.push({
          name: 'songs'
        })
      } catch (err) {
        console.log(err)
      }
    }
  }
}
</script>

<style scoped>
</style>
