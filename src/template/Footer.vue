<template>
  <footer>
      <span>Desenvolvido por <a href="https://davidfreitas.dev.br" target="_blank">David Freitas</a>.</span>
      <span>Ver no <a href="https://github.com/davidfreitas-dev/app-sorteio-vue" target="_blank">Github <strong>→</strong></a></span>
  </footer>
</template>

<script>
export default {

}
</script>

<style scoped>
  footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  }
  span {
    font-size: .85rem;
  }

  a {
    color: var(--main);
    font-size: 1rem;
    cursor: pointer;
    text-decoration: none;
  }
</style>