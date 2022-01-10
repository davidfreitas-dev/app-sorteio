<template>
  <div class="content">
      <Raffle :values="values"/>
  </div>
</template>

<script>
import Raffle from '../components/Raffle.vue'
export default {
  components: { Raffle },
  props: ['values'],
}
</script>

<style>
  .content {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-grow: 1;
  }
</style>