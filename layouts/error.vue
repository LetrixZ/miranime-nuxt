<template>
  <div>
    <ErrorMessage :error='error' />
  </div>
</template>

<script>
import ErrorMessage from '@/components/ErrorMessage.vue'

export default {
  components: { ErrorMessage },
  props: ['error']
}
</script>
