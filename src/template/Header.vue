<template>
  <header class="header">
    <h2>Dave <span>dev</span></h2>
    <nav class="nav">
      <span @click="toggleTheme">Toggle</span>
    </nav>
  </header>
</template>

<script>
export default {
  methods: {
    toggleTheme() {
      return document.documentElement.classList.toggle('light__theme')
    }
  }
}
</script>

<style scoped>
  .header {
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    width: 100%;
    height: 70px;
    top: 0;
    z-index: 1;
    background-color: var(--bg);
    box-shadow: var(--box-shadow);
    transition: 0.2s linear;
  }

  header h2 span {
    color: var(--main);
  }
</style>