import { reactive, ref } from '@nuxtjs/composition-api'

export class Store {
  constructor(storeName) {
    this.storeName = storeName
    const data = this.data()
    this.state = reactive(data)
  }

  data() {
    return {
      anime: ref(null),
      currentAnime: null,
      loading: false,
      error: null
    }
  }

  setLoading(loading) {
    this.state.loading = loading
  }

  setError(message) {
    this.state.error = message
  }

  async setCurrentAnime(slug) {
    try {
      if (slug !== this.state?.currentAnime?.slug) {
        this.setLoading(true)
        const res = await fetch(`http://localhost:4000/anime?slug=${slug}`)
        this.state.currentAnime = await res.json()
      }
    } catch (e) {
      this.state.currentAnime = null
      this.setError(e.message)
    } finally {
      this.setLoading(false)
    }
  }

  async getAnime(slug) {
    try {
      if (slug !== this.state?.anime?.slug) {
        this.setLoading(true)
        const res = await fetch(`http://localhost:4000/anime?slug=${slug}`)
        this.state.anime.value = await res.json()
      }
    } catch (e) {
      this.setError(e.message)
    } finally {
      this.setLoading(false)
    }
  }

  getCurrentAnime() {
    return this.state.currentAnime
  }

  getLoading() {
    return this.state.loading
  }

  getError() {
    return this.state.error
  }

}

export const store = new Store('DataStore')
