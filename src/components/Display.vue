<template>
  <div class="draw__display">
    <ul>
      <li class="success" v-for="(names, index) in selectedNames" :key="index">
        <span v-for="(name, index) in names" :key="index">
          {{ name }}
        </span>
      </li>
    </ul>
    <span class="error" v-if="error.status">
      {{ error.message }}
    </span>
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
    display: grid;
    place-items: center;
    align-items: center;
    list-style: none;
  }

  li {
    margin-bottom: .75rem;
  }

  .success{
    font-size: 1.3rem;
    color: #fff;
    padding: .5rem 1rem;
    border-radius: 3px;
    background-color: var(--success);
  }

  .error {
    font-size: .85rem;
    padding: .85rem;
    border-radius: 3px;
    color: #fff;
    background-color: var(--danger);
  }
</style>