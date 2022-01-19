<template>
  <div class="raffle">      
      <Form :clear="clear"/>
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
  data() {
    return {
      clear: false,
    }
  },  
  methods: {
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
      // criar mutation para alterar a propriedade
      this.$store.state.selectedNames.push(item)
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