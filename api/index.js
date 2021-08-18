import express from 'express'
import db from './db'
import Anime from './models/Anime'
import Site from './models/Site'

const app = express()

const error = (statusCode, message) => ({ statusCode, message })

db.sequelize.sync().then(async r => {
  Site.belongsTo(Anime, { foreignKey: 'animeId' })
  Anime.hasMany(Site, { foreignKey: 'animeId' })
})

app.use(express.json())
app.engine('html', require('ejs').renderFile)
app.all('/getJSON', (req, res) => {
  res.json({ data: 'data' })
})

app.get('/anime', async (req, res, next) => {
  try {
    const { slug } = req.query
    if (!slug) next(error(400, 'No slug given'))
    const anime = await Anime.findOne({ where: { slug }, include: Site })
    if (anime) {
      res.status(200).json(anime)
    } else next(error(404, 'Item not found in database'))
  } catch (e) {
    next(e)
  }
})

app.use((error, req, res, next) => {
  console.log('Path: ', req.path)
  console.error('Error: ', error)
  if (error.statusCode === 404) {
    res.status(404).render('./error.html', { error: error.message, message: `Anime <b>${req.query.slug}</b> no encontrado` })
  } else if (error.statusCode === 400) {
    res.status(400).render('./error.html', { error: error.message, message: `Parametros no ingresados o incorrectos` })
  } else res.status(500).render('./error.html', { error: error.message, message: 'Error en el servidor' })
})

app.get('/', (req, res) => {
})

module.exports = app
