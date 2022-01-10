<template>
  <div class="content">
      <Raffle :values="values" @remove="remove"/>
  </div>
</template>

<script>
import Raffle from '../components/Raffle.vue'
export default {
  components: { Raffle },
  props: ['values'],
  methods: {
    remove(random) {
      this.$emit('remove', random)
    }
  }
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