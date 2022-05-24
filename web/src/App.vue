<template>
  <div id="app" class="animate__animated animate__fadeIn animate__slow">
    <Header />
    <Content />
    <Footer />
  </div>
</template>

<script>
import './styles/global.css'

import Header from './template/Header.vue'
import Content from './template/Content.vue'
import Footer from './template/Footer.vue'

export default {
  name: 'App',
  components: { Header, Content, Footer }
}
</script>

<style>
  #app {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
</style>
