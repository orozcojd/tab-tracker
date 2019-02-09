
module.exports = (sequelize, dataTypes) => {
    const Song = sequelize.define('Song', {
      title: dataTypes.STRING,
      artist: dataTypes.STRING,
      genre: dataTypes.STRING,
      album: dataTypes.STRING,
      albumImageUrl: dataTypes.STRING,
      youtubeId: dataTypes.STRING,
      lyrics: dataTypes.TEXT,
      tab: dataTypes.TEXT,
    })

    return Song
}
