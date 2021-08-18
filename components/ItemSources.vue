<template>
  <div>
    <div class='d-none'>
      <span class='semibold'>Información</span>
      <div>
        <a v-if='idMal' :href='`https://myanimelist.net/anime/${idMal}`' rel='noreferrer noopener' target='_blank'>
          <img :src="require('../static/myanimelist.png')" alt='MyAnimeList' class='site-icon' title='MyAnimeList' />
        </a>

        <a v-if='idAL' :href='`https://anilist.co/anime/${idAL}`' rel='noreferrer noopener' target='_blank'>
          <img :src="require('../static/anilist.png')" alt='MyAnimeList' class='site-icon' title='MyAnimeList' />
        </a>
      </div>
    </div>
    <div class='d-flex flex-column flex-md-row'>
      <div>
        <span class=''>Desde</span>
        <div>
          <a v-for='site in sites' :key='site.source' :href='getSource(site)' rel='noreferrer noopener' target='_blank'>
            <img
              :alt='site.name'
              :src='require(`../static/${site.source.toLowerCase()}.png`)'
              :title='site.name'
              class='site-icon'
              data-bs-placement='top'
              data-bs-toggle='tooltip'
            />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getSource } from '@/utils/utils'

export default {
  name: 'Sources',
  props: ['sites', 'idMal', 'idAL'],
  setup() {
    return { getSource }
  }
}
</script>

<style scoped>
.site-icon {
  width: 26px;
  height: 26px;
  object-fit: contain;
  margin: 0 4px;
}
</style>
