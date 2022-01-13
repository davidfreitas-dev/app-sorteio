<template>
  <div class="content">
      <Raffle />
  </div>
</template>

<script>
import Raffle from '../components/Raffle.vue'
export default {
  components: { Raffle },
}
</script>

<style>
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
    margin-top: 70px;
  }
</style>