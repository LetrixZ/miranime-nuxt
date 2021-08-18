<template>
  <div class='container-fluid col-lg-10 mt-2'>
    <div class='row'>
      <div class='col-12 text-center text-lg-start col-lg-8'>
        <h2>{{ data.title }}</h2>
        <p>
          <span class='me-2 badge bg-primary'
          >{{ data.episodes }} episodio(s)</span
          >
          <span class='badge bg-dark'>{{ data.status }}</span>
        </p>
        <Sources :sites='data.sites' />
        <div class='my-2'>{{ data.synopsis }}</div>
        <div class='row mt-2 justify-content-center justify-content-lg-start'>
          <div v-for='n in data.episodes' :key='n' class='col-auto'>
            <Episode :slug='data.slug' :episode='n' />
          </div>
        </div>
      </div>
    </div>
    <div class='d-flex justify-content-center fixed-bottom mb-2'>
      <button class='btn btn-outline-primary' @click='$fetch'>Refresh</button>
    </div>
  </div>
</template>

<script>
import Episode from '~/components/Episode'
import Sources from '~/components/ItemSources'

export default {
  components: { Episode, Sources },
  async asyncData({ params, $axios, error }) {
    try {
      const data = await $axios.$get(
        `/api/anime?slug=${params.slug}`
      )
      return { data }
    } catch (e) {
      if (e.message?.includes('404')) error({ statusCode: 404, message: 'Anime not found', path: params.slug })
      else error({ message: e.message })
    }
  },
  head() {
    return {
      title: this.data.title + ' - Miranime',
      meta: [
        {
          hid: 'og-title',
          property: 'og:title',
          content: this.data.title + ' - Miranime'
        },
        {
          hid: 'og-description',
          property: 'og:description',
          content: this.data.synopsis
        },
        {
          hid: 'og-image',
          property: 'og:image',
          content: this.data.banner || this.data.poster
        }
      ]
    }
  }
  // setup() {
  //   const route = useRoute()
  //   const router = useRouter()
  //
  //   const { title, meta } = useMeta()
  //
  //   const data = ref()
  //   const loading = ref(true)
  //   const { fetch, fetchState } = useFetch(async () => {
  //     data.value = (await axios.get(`http://localhost:4000/anime?slug=${route.value.params.slug}`)).data
  //   })
  //
  //   const to = () => {
  //     let slug
  //     if (route.value.params.slug === 'bna') slug = 'cowboy-bebop'
  //     else slug = 'bna'
  //     router.push(`/anime/${slug}`)
  //   }
  //
  //   title.value = data.value.title
  //   meta.value.push({
  //     hid: 'ogTitle',
  //     name: 'og:title',
  //     content: data.value.title,
  //   })
  //
  //   return { data, loading, fetchState, fetch, to }
  // }
}
</script>

<style>
</style>
