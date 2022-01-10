<template>
  <div class="raffle">
      <textarea cols="30" rows="5" placeholder="Digite aqui os nomes que quer sortear"></textarea>
      <input type="text" placeholder="Quantidade a ser sorteada por vez">
      <button @click="draw">Sortear</button>
      <ul>
        <li v-for="(value, i) in values" :key="i">
          <span>{{ i == random ? value : '' }}</span>
        </li>
      </ul>
  </div>
</template>

<script>
export default {
  props: ['values'],
  data() {
    return {
      random: null
    }
  },
  methods: {
    draw() {
      const max = this.values.length
      const random = Math.floor(Math.random() * max)
      
      this.random = random
      
      this.$emit('remove', random)
    }
  }
}
</script>

<style>
  .raffle {
    display: grid;
    justify-content: center;
    align-items: center;
    grid-gap: 1rem;
    padding: 2rem;
  }

  textarea, input {
    color: var(--font);
    width: 350px;
    padding: 1rem;
    outline: none;
    border-radius: 3px;
    border: 1px solid var(--secondary);
    background-color: var(--primary);
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

  ul {
    list-style: none;
    display: grid;
    place-items: center;
  }

  span {
    font-size: 1.3rem;
  }
</style>