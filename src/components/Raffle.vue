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
      selectedValues: []
    }
  },  
  methods: {
    setValues(values) {
      if (values == '') {
        alert('Insira os nomes a serem sorteados!')
      }
      this.values = values
    },
    removeValues(random) {
      const values = this.values
      const selectedValue = values.splice(random, 1)
      this.selectedValues.push(selectedValue[0])
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