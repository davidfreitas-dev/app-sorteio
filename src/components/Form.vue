<template>
  <div class="draw__form">
      <textarea v-model="names" @blur="handleBlur" cols="30" rows="5"
        placeholder="Digite aqui os nomes separados por vírgula"></textarea>
      <input v-model="quantity" @blur="handleBlur" type="text"
        placeholder="Quantidade a ser sorteada por vez" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      names: '',
      quantity: null
    }
  },
  methods: {
    handleBlur() {
      let self = this
      const names = self.names.split(',')
      const quantity = self.quantity
      self.$emit('setValues', { names, quantity })
    }
  }
}
</script>

<style scoped>
  .draw__form {
    display: grid;
    justify-content: center;
    align-items: center;
    grid-gap: 1rem;
  }

  textarea, input {
    color: var(--font);
    font-size: 1rem;
    width: 350px;
    padding: 1rem;
    outline: none;
    border-radius: 3px;
    border: 1px solid var(--secondary);
    background-color: var(--primary);
    transition: 0.2s linear;
  }
</style>