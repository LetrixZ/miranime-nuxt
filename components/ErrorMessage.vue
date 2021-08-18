<template>
  <div class='centered'>
    <span class='h2' v-html='errorMessage.message'>
    </span>
    <span class='text-muted mb-2'>{{ error.message }}</span>
    <nuxt-link to='/'>Inicio</nuxt-link>
    <span class='fixed-bottom mb-2 text-danger fw-bold badge user-select-none'>Miranime</span>
  </div>
</template>

<script>
export default {
  name: 'ErrorMessage',
  props: ['error'],
  data() {
    return { errorMessage: {} }
  },
  created() {
    this.errorMessage = {}
    if (this.error.statusCode === 404) {
      if (this.error.path) this.errorMessage.message = `Anime <b>${this.error.path}</b> no encontrado`
      else this.errorMessage.message = 'Página no encontrada'
    } else if (this.error.statusCode === 500) {
      this.errorMessage.message = 'Error en el servidor'
    }
  }
}
</script>

<style scoped>
.centered {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  min-height: 100vh;
}
</style>
