<template>
  <footer>
      <span>Desenvolvido por <a href="https://davidfreitas.dev.br">David Freitas</a>.</span>
      <span>Ver no <a>Github <strong>→</strong></a></span>
  </footer>
</template>

<script>
export default {

}
</script>

<style>
  footer {
    display: flex;
    flex-direction: column;
    align-items: center;
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