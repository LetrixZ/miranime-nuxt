<template>
  <div>
    <NuxtLink :to='`/anime/${slug}/${episode}`' class='text-decoration-none'>
      <div class='episode d-flex flex-column justify-content-center'>
        Episodio {{ episode }}
      </div>
    </NuxtLink>
  </div>
</template>

<script>
export default {
  props: ['episode', 'slug']
}
</script>

<style scoped>
.episode {
  border-radius: 5px;
  padding: 4px 8px;
  background: rgb(20, 20, 20);
  margin: 6px;
  height: 50px;
  width: 120px;
  text-align: center;
}
</style>
