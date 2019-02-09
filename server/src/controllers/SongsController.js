// controllers are used for declaring all the endpoints
const {Song} = require('../models')

module.exports = {
    async index (req, res) {
        try {
            const songs = await Song.findAll({
              limit: 10
            })
            res.send(songs)
        } catch (err) {
            res.status(400).send({
                error: 'An error has occured trying to to fetch the songs'
            })
        }
    },
    async post (req, res) {
      try {
          const song = await Song.create(req.body)
          console.log(song)
          res.send(song)
      } catch (err) {
          res.status(400).send({
              error: 'An error has occured trying to create the song'
          })
      }
  }
}