<template>
  <div class="raffle">      
      <Form @setValues="setValues"/>
      <Button @removeValues="removeValues" :values="values"/>
      <Display :selectedValues="selectedValues"/>      
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
      quantity: null
    }
  },  
  methods: {
    setValues(values) {
      if (values.names == '') {
        alert('Insira os nomes a serem sorteados!')
      }
      this.values = values.names
      this.quantity = values.quantity
    },
    removeValues(random) {
      const quantity = this.quantity ? this.quantity : 1
      const values = this.values
      const selectedValue = values.splice(random, quantity)
      this.selectedValues.push(selectedValue[0])
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