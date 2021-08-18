<template>
  <div>
    <Nuxt />
  </div>
</template>

<script>
import { store } from '@/store/main'

export default {
  provide: {
    store
  }
}
</script>
