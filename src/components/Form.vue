<template>
  <div class="draw__form">
      <textarea cols="30" rows="5" placeholder="Digite aqui os nomes que quer sortear" v-model="names" @blur="handleBlur"></textarea>
      <input type="text" placeholder="Quantidade a ser sorteada por vez" v-model="qtdDraw">
  </div>
</template>

<script>
export default {
  data() {
    return {
      names: '',
      qtdDraw: 1
    }
  },
  methods: {
    handleBlur() {
      const names = this.names.split(',')
      this.$emit('countNames', names)
    }
  }
}
</script>

<style>
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
  }
</style>