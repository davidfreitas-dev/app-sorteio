<template>
  <div class="content">
      <span class="content__header">Sorteio de Nomes</span>
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
    align-items: center;
    flex-grow: 1;
    margin-top: 70px;
  }

  .content__header {
    padding-top: 1rem;
    font-size: 1.85rem;
    font-weight: 600;
  }
</style>