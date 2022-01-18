<template>
  <div class="draw__button">
    <button class="btn__draw" @click="draw">Sortear</button>
    <button class="btn__clear" @click="clearMemory">Limpar</button>
  </div>
</template>

<script>
export default {
  props: ['names'],
  data() {    
    return {
      error: { message: '', status: false }
    }
  },
  methods: {
    draw() {
      let self = this
      if (self.names.length == 0) {

        self.error.status = true
        self.error.message = 'Não há nomes para sortear'

        const error = self.error
        const shuffleNames = []
        
        self.$emit('draw', { shuffleNames, error })
        return

      }

      self.error.message = ''
      self.error.status = false

      const error = self.error
      const names = self.names
      const shuffleNames = self.shuffle(names)

      self.$emit('draw', { shuffleNames, error })
    },
    shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex

      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1
        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
      }

      return array
    },
    clearMemory() {
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