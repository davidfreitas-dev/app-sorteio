<template>
  <div class="raffle">      
      <Form @countNames="countNames"/>
      <Button />
      <Display />      
  </div>
</template>

<script>
import Form from './Form.vue'
import Button from './Button.vue'
import Display from './Display.vue'
export default {
  props: ['values'],
  components: { Form, Button, Display },
  data() {
    return {
      qtdNames: 0
    }
  },
  methods: {
    countNames(names) {
      const count = names.length
      this.qtdNames = count
    }
  }
}
</script>

<style>
  .raffle {
    display: grid;
    justify-content: center;
    align-items: center;
    grid-gap: 1rem;
    padding: 2rem;
  }
</style>