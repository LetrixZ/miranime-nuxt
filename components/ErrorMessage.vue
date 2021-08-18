<template>
  <div class="centered">
    <div v-if="errorMessage" class="h2" v-html="errorMessage" />
  </div>
</template>

<script>
import { onMounted } from "vue";

export default {
  name: "ErrorMessage",
  props: {
    error: String
  },
  setup(props) {
    let errorMessage = "";
    onMounted(() => {
      errorMessage = props.error;
    });
    if (errorMessage.includes("not found")) {
      errorMessage = `No existe un anime en la base de datos con ID <b>${errorMessage.split(" ")[3]}</b>`;
    }
    return { errorMessage };
  }
};
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
