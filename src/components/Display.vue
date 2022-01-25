<template>
  <div class="draw__display">
    <ul>
      <li>
        <span class="success animate__animated animate__fadeIn" v-for="(names, index) in selectedNames" :key="index">
          {{ names }}
        </span>
      </li>
    </ul>
    <span class="error animate__animated animate__bounceIn" v-if="error.status">
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

  .success{
    font-size: 1.3rem;
    color: #fff;
    padding: .5rem 1rem;    
    margin-bottom: .75rem;
    border-radius: 3px;
    background-color: var(--success);
  }

  .error {
    font-size: .85rem;
    padding: .85rem;
    margin-top: 1rem;
    border-radius: 3px;
    color: #fff;
    background-color: var(--danger);
  }

  li {
    display: grid;
    place-items: center;
    align-items: center;
    list-style: none;
  }

</style>