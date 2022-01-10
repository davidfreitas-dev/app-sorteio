<template>
  <div class="raffle">
      <textarea cols="30" rows="5"></textarea>
      <input type="text">
      <button @click="draw">Sortear</button>
      <div class="display__raffle">
        <ul>
          <li v-for="(value, id) in values" :key="id">
            {{ value.id == result ? value.name : '' }}
          </li>
        </ul>
      </div>
  </div>
</template>

<script>
export default {
  props: ['values'],
  data() {
    return {
      counter: 1,
      result: ''
    }
  },
  methods: {
    draw() {
      const max = this.values.length
      const result = Math.floor(Math.random() * (max - 1 + 1) + 1)
      this.result = result
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
    padding: .5rem;
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
</style>