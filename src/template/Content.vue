<template>
  <div class="content">
      <h2 class="content__header">Sorteio de Nomes</h2>
      <Raffle />
  </div>
</template>

<script>
import Raffle from '../components/Raffle.vue'
export default {
  components: { Raffle },
}
</script>

<style scoped>
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    margin-top: 70px;
  }

  .content__header {
    padding-top: 1rem;
  }
</style>