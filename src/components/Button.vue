<template>
  <div class="draw__button">
    <button class="btn__draw" @click="draw">Sortear</button>
    <button class="btn__clear" @click="clearMemory">Limpar</button>
  </div>
</template>

<script>
export default {
  methods: {
    draw() {
      const names = this.$store.state.names
      const error = this.$store.state.error
      
      if (names == '') {
        const shuffleNames = []
        error.status = true
        error.message = 'Não há nomes para sortear'
        this.$emit('draw', { shuffleNames, error })
        return
      }

      error.message = ''
      error.status = false

      const shuffleNames = this.$store.getters.shuffle
      this.$emit('draw', { shuffleNames, error })
    },
    clearMemory() {
      // altera o status da propriedade "limpar" para verdadeiro
      const clear = true
      this.$emit('clearMemory', clear)
    }
  }
}
</script>

<style scoped>
  .draw__button {
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