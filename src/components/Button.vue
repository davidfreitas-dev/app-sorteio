<template>
  <div class="draw__button">
    <button class="btn__draw" @click="draw">Sortear</button>
    <button class="btn__clear" @click="clear">Limpar</button>
  </div>
</template>

<script>
export default {
  props: ['values'],
  data() {    
    return {
      error: { message: '', status: false }
    }
  },
  methods: {
    draw() {
      
      if (this.values.length == 0) {

        this.error.status = true
        this.error.message = 'Não há nomes para sortear'

        const error = this.error
        const shuffleValues = []
        
        this.$emit('draw', { shuffleValues, error })
        return

      }

      this.error.message = ''
      this.error.status = false

      const error = this.error
      const values = this.values
      const shuffleValues = this.shuffle(values)

      this.$emit('draw', { shuffleValues, error })

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
    clear() {

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
    border: 1px solid var(--main);
    border-radius: 3px;
    background-color: #fcfcfc;
    cursor: pointer;
  }  
</style>