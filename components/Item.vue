<template>
  <div class='container-fluid'>
    <span>Slug: <span class='h6'>{{ obj.slug }}</span></span>
    <div class='d-flex'>
      <div>
        <img class='poster rounded-top' :src='obj.poster' />
        <input class='form-control rounded-0 rounded-bottom' v-model='obj.poster'>
      </div>
      <div class='ms-2 d-flex flex-column card col-6'>
        <div class='row mb-3'>
          <label class='col-sm-2 col-form-label'>Title</label>
          <div class='col-sm-10'>
            <input class='form-control mb-2' v-model='obj.title'>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

import { ref, watch } from '@nuxtjs/composition-api'

export default {
  name: 'Item',
  props: {
    index: Number,
    item: Object
  },
  setup(props) {

    const obj = ref({ slug: 'bna', poster: 'https://s4.anilist.co/file/anilistcdn/media/anime/cover/large/bx110354-JJKR42frJABe.jpg', title: 'BNA' })

    watch(() => props.item, () => {
      const { slug, poster, title } = props.item
      obj.value.slug = slug
      obj.value.poster = poster
      obj.value.title = title
    })

    return { obj }
  }
}
</script>

<style scoped>
.poster {
  object-fit: cover;
  width: 20vw;
  height: 600px;
}
</style>
