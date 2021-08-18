<template>
  <div class='container-fluid'>
    <a @click='to'>
      <img src='/chevron-left.svg' class='back-btn'>
    </a>
    I'm episode
  </div>
</template>

<script>
import { inject, useRouter } from '@nuxtjs/composition-api'

export default {
  setup() {
    // eslint-disable-next-line no-unused-vars
    const store = inject('store')

    const router = useRouter()

    const to = () => {
      router.back()
    }

    return { to }
  }
}
</script>

<style>
.back-btn {
  filter: invert();
  width: 24px;
  height: 24px;
}

</style>
