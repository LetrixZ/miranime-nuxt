<template>
  <Nuxt />
</template>

<script>
import { store } from '@/store/main'

export default {
  provide: {
    store
  }
}
</script>
