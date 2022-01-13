<template>
  <div class="draw__button">
    <button @click="draw">Sortear</button>
  </div>
</template>

<script>
export default {
  props: ['qtdNames'],
  methods: {
    draw() {
      const max = this.qtdNames
      const random = Math.floor(Math.random() * max)      
      this.$emit('remove', random)
    }
  }
}
</script>

<style>
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
  }
</style>