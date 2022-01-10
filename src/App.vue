<template>
  <div id="app">
    <Header />
    <Content :values="values" @remove="remove($event)"/>
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
      values: [ 'David', 'Batista', 'Freitas' ]
    }
  },
  methods: {
    remove(random) {
      console.log(random)
      const values = this.values
      console.log(this.values)
      //values.splice(random, 1)
      console.log(values)
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
