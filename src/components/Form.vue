<template>
  <div class="draw__form">
      <textarea v-model="names" @blur="setValues" cols="30" rows="5"
        placeholder="Digite aqui os nomes separados por vírgula"></textarea>
      <input v-model="quantity" @blur="setValues" type="text"
        placeholder="Quantidade a ser sorteada por vez" />
  </div>
</template>

<script>
export default {
  props: ['clear'],
  data() {
    return {
      names: '',
      quantity: null
    }
  },
  methods: {
    setValues() {
      const names = this.names.split(',')
      const quantity = this.quantity
      this.$store.state.names = names
      this.$store.state.quantity = quantity
    }
  },
  watch: {
    clear() {
      if (this.clear) {
        Object.assign(this.$data, this.$options.data())
      }
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