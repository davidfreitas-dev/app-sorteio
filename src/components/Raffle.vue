<template>
  <div class="raffle">      
      <Form />
      <Buttons />
      <Result />      
  </div>
</template>

<script>
import Form from './Form.vue'
import Buttons from './Buttons.vue'
import Result from './Result.vue'

export default {
  components: { Form, Buttons, Result }
}
</script>

<style scoped>
  .raffle {
    display: grid;
    justify-content: center;
    align-items: center;
    grid-gap: 1rem;
    padding: 1rem;
  }
</style>