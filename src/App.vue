<template>
  <div id="app">
    <Header />
    <Content :values="values"/>
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
  components: { Header, Content, Footer },
  data() {
    return {
      values: [
        { id: 1, name: 'David', status: false },
        { id: 2, name: 'Batista', status: false },
        { id: 3, name: 'Freitas', status: false },
      ]
    }
  }
}
</script>

<style>
  #app {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3rem;
  }
</style>
