import db from '../db'
import Anime from './Anime'

const { DataTypes, Model } = require('sequelize')

class Site extends Model {
}

Site.init({
  slug: {
    type: DataTypes.STRING,
    allowNull: false
  },
  source: {
    type: DataTypes.STRING,
    allowNull: false
  },
  animeId: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
}, {
  sequelize: db.sequelize
})

export default Site

