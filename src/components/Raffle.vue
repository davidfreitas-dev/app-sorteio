<template>
  <div class="raffle">      
      <Form @setValues="setValues" />
      <Button @draw="draw" :values="values" />
      <Display :selectedValues="selectedValues" :error="error" />      
  </div>
</template>

<script>
import Form from './Form.vue'
import Button from './Button.vue'
import Display from './Display.vue'

export default {
  components: { Form, Button, Display },
  data() {
    return {
      values: [],
      selectedValues: [],
      quantity: null,
      error: ''
    }
  },  
  methods: {
    setValues(values) {
      this.values = values.names
      this.quantity = values.quantity
    },
    draw(event) {
      if (event.error) {
        this.error = event.error
      }

      const item = ''
      const quantity = this.quantity ? this.quantity : 1
      const selectedValue = event.shuffleValues.splice(0, quantity)

      this.pushValues(item)
      selectedValue.forEach(this.pushValues)
    },
    pushValues(item) {
      this.selectedValues.push(item)
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