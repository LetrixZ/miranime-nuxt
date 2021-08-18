<template>
  <div v-if='loading'>
    <Loading />
  </div>
  <div v-else-if='error'>
    <ErrorMessage :error='error' />
  </div>
  <div v-else-if='data' class='container-fluid col-10'>
    <div class='row'>
      <div class='col-8'>
        <h2>{{ data.title }}</h2>
        <p>
          <span class='me-2 badge bg-primary'>{{ data.episodes }} episodio(s)</span>
          <span class='badge bg-dark'>{{ data.status }}</span>
        </p>
        <Sources :sites='data.sites' />
        <div class='my-2'>{{ data.synopsis }}</div>
        <div class='row mt-2'>
          <div v-for='n in data.episodes' :key='n' class='col-auto'>
            <Episode :slug='data.slug' :episode='n' />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { inject, onMounted, useRoute } from '@nuxtjs/composition-api'
import Episode from '~/components/Episode'
import Sources from '~/components/ItemSources'
import ErrorMessage from '~/components/ErrorMessage'
import Loading from '~/components/Loading'

export default {
  components: { Episode, Sources, ErrorMessage, Loading },
  setup() {
    const store = inject('store')
    const loading = store.getLoading()
    const error = store.getError()
    const currentAnime = store.getCurrentAnime()

    const route = useRoute()

    onMounted(() => {
      store.setCurrentAnime(route.value.params.slug)
    })

    return { loading, error, data: currentAnime }
  }
}
</script>

<style>

</style>
