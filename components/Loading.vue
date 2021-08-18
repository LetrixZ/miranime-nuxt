<template>
  <div class='centered'>
    <div class='h2 mb-3'>{{ message || "Cargando" }}</div>
    <div class='spinner-border text-primary' />
  </div>
</template>

<script>
export default {
  name: 'Loading',
  props: {
    message: String
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
