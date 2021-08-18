import db from '../db'
import AnimeDto from './AnimeDto'

const { DataTypes, Model } = require('sequelize')

class Anime extends Model {
  toJSON() {
    return new AnimeDto(this)
  }
}

Anime.init({
  slug: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  idMal: {
    type: DataTypes.INTEGER,
    unique: true
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  synonyms: {
    type: DataTypes.STRING
  },
  type: {
    type: DataTypes.STRING
  },
  genres: {
    type: DataTypes.ARRAY(DataTypes.STRING)
  },
  episodes: {
    type: DataTypes.INTEGER
  },
  status: {
    type: DataTypes.STRING
  },
  synopsis: {
    type: DataTypes.TEXT
  },
  season: {
    type: DataTypes.STRING
  },
  year: {
    type: DataTypes.INTEGER
  },
  poster: {
    type: DataTypes.TEXT
  },
  banner: {
    type: DataTypes.TEXT
  },
  trailer: {
    type: DataTypes.TEXT
  }
}, {
  sequelize: db.sequelize
})

export default Anime
