<template>
  <div class="raffle">      
      <Form @setValues="setValues" :clear="clear"/>
      <Button @draw="draw" @clearMemory="clearMemory" :names="names" />
      <Display :selected-names="selectedNames" :error="error" />      
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
      names: [],
      quantity: null,
      selectedNames: [],
      clear: false,
      error: ''
    }
  },  
  methods: {
    setValues(values) {
      this.names = values.names
      this.quantity = values.quantity
    },
    draw(values) {
      if (values.error) {
        this.error = values.error
      }

      const item = ''
      const quantity = this.quantity ? this.quantity : 1
      const selectedName = values.shuffleNames.splice(0, quantity)

      this.pushValues(item)
      selectedName.forEach(this.pushValues)
    },
    pushValues(item) {
      this.selectedNames.push(item)
    },
    clearMemory(clear) {   
      this.clear = clear      
      setTimeout(() => {
        Object.assign(this.$data, this.$options.data())
      }, 1)
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