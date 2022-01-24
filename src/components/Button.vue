<template>
  <div class="buttons">
    <button class="btn__draw" @click="draw">Sortear</button>
    <button class="btn__clear" @click="clearMemory">Limpar</button>
  </div>
</template>

<script>
export default {
  methods: {
    draw() {
      const names = this.$store.state.names
      const quantity = this.$store.state.quantity
      
      if (names == '') {
        const error = { status: true, message: 'Não há nomes para sortear' }
        this.$store.commit('setErrorMsg', error)
        return
      }
      
      const qty = quantity ? quantity : 1
      const shuffleNames = this.$store.getters.shuffle
      const selectedNames = shuffleNames.splice(0, qty)
      this.$store.commit('pushValues', selectedNames)
    },
    clearMemory() {
      this.$store.commit('clearMemory')
    }
  }
}
</script>

<style scoped>
  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btn__draw {
    color: #fcfcfc;
    font-size: 1.1rem;
    font-weight: 600;
    padding: .5rem 1rem;
    margin: .5rem;
    outline: none;
    border: 1px solid var(--main);
    border-radius: 3px;
    background-color: var(--main);
    cursor: pointer;
  }

  .btn__clear {
    color: var(--main);
    font-size: 1.1rem;
    font-weight: 600;
    padding: .5rem 1rem;
    margin: .5rem;
    outline: none;
    border: 1px solid var(--border-button);
    border-radius: 3px;
    background-color: #fcfcfc;
    cursor: pointer;
  }  
</style>