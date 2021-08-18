class AnimeDto {
  slug
  title
  type
  episodes
  status
  synopsis
  season
  year
  poster
  banner
  trailer
  genres
  synonyms
  sites

  constructor(entity) {
    const { slug, title, type, episodes, status, season, year, trailer, poster, banner, synonyms, genres, Sites, synopsis } = entity
    this.slug = slug
    this.title = title
    this.type = type
    this.episodes = episodes
    this.status = status
    this.season = season
    this.synopsis = synopsis
    this.year = year
    this.trailer = trailer
    this.poster = poster
    this.banner = banner
    this.synonyms = synonyms.split(' | ')
    this.genres = genres.map((it) => it.toUpperCase())
    this.sites = Sites.map((it) => ({ slug: it.slug, source: it.source }))
  }
}


export default AnimeDto
