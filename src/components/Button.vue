<template>
  <div class="draw__button">
    <button @click="draw">Sortear</button>
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
        this.error.message = 'Insira os nomes antes de sortear'

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

  button {
    color: #fcfcfc;
    font-size: 1.1rem;
    font-weight: 600;
    padding: .5rem 1rem;
    outline: none;
    border: none;
    border-radius: 3px;
    background-color: var(--main);
    cursor: pointer;
  }
</style>