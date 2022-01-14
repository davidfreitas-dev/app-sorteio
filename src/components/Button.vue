<template>
  <div class="draw__button">
    <button @click="draw">Sortear</button>
  </div>
</template>

<script>
export default {
  props: ['values'],
  methods: {
    draw() {
      const values = this.values
      const shuffleValues = this.shuffle(values)          
      this.$emit('draw', shuffleValues)
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