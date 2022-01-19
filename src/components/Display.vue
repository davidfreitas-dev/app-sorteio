<template>
  <div class="draw__display">
    <ul>
      <li v-for="(selectedName, index) in selectedNames" :key="index">
        <span>{{ selectedName }}</span>
      </li>
      <span class="error" v-if="error.status">Erro: {{ error.message }}</span>
    </ul>
  </div>
</template>

<script>
export default {
  computed: {
    selectedNames() {
      return this.$store.state.selectedNames
    },
    error() {
      return this.$store.state.error
    }
  }
}
</script>

<style scoped>
  .draw__display {
    display: grid;
    justify-content: center;
    align-items: center;
  }

  ul {
    list-style: none;
    display: grid;
    place-items: center;
  }

  span {
    font-size: 1.3rem;
  }

  .error {
    font-size: .85rem;
    color: red;
    padding: .75rem;
  }
</style>