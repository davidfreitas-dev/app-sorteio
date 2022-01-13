<template>
  <div class="draw__display">
    <ul>
      <li v-for="(selectedValue, i) in selectedValues" :key="i">
        <span>{{ selectedValue }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ['selectedValues'],
  watch: {
    selectedValues() {
      console.log(this.selectedValues)
    }
  }
}
</script>

<style>
  .draw__display {
    display: grid;
    justify-content: center;
    align-items: center;
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