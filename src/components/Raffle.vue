<template>
  <div class="raffle">      
      <Form/>
      <Button @draw="draw" />
      <Display />      
  </div>
</template>

<script>
import Form from './Form.vue'
import Button from './Button.vue'
import Display from './Display.vue'

export default {
  components: { Form, Button, Display },
  methods: {
    draw(values) {
      const quantity = values.quantity ? values.quantity : 1
      const selectedNames = values.shuffleNames.splice(0, quantity)
      this.$store.commit('pushValues', selectedNames)
    }
  }
}
</script>

<style scoped>
  .raffle {
    display: grid;
    justify-content: center;
    align-items: center;
    grid-gap: 1rem;
    padding: 2rem;
  }
</style>