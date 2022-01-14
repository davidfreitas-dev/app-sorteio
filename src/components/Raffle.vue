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
      error: { message: '', status: false }
    }
  },  
  methods: {
    setValues(values) {
      if (values.names == '') {
        this.error.message = 'Insira os nomes a serem sorteados!'
        this.error.status = true
        return
      }
      this.error.status = false
      this.values = values.names
      this.quantity = values.quantity
    },
    draw(shuffleValues) {
      const item = ''
      const quantity = this.quantity ? this.quantity : 1
      const selectedValue = shuffleValues.splice(0, quantity)      
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