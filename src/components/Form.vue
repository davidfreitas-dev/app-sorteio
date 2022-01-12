<template>
  <div class="draw__form">
      <textarea cols="30" rows="5" placeholder="Digite aqui os nomes que quer sortear" v-model="values" @blur="handleBlur"></textarea>
      <input type="text" placeholder="Quantidade a ser sorteada por vez" v-model="qtdItems">
  </div>
</template>

<script>
export default {
  data() {
    return {
      values: '',
      qtdItems: 1
    }
  },
  methods: {
    handleBlur() {
      const values = this.values.split(',')
      console.log('Array de nome: ' + values + ', Qtd Items: ' + this.qtdItems)
    }
  }
}
</script>

<style>
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