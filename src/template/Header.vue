<template>
  <header class="header">
    <h2>Dave <span>dev</span></h2>
    <nav class="nav">
      <label class="switch">
        <input type="checkbox">
        <span class="slider round" @click="toggleTheme"></span>
      </label>
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

  /* The switch - the box around the slider */
  .switch {
    position: relative;
    display: inline-block;
    width: 45px;
    height: 25px;
  }

  /* Hide default HTML checkbox */
  .switch input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  /* The slider */
  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .4s;
    transition: .4s;
  }

  .slider:before {
    position: absolute;
    content: "";
    height: 20px;
    width: 20px;
    left: 3px;
    bottom: 3px;
    background-color: white;
    -webkit-transition: .4s;
    transition: .4s;
  }

  input:checked + .slider {
    background-color: var(--main);
  }

  input:focus + .slider {
    box-shadow: 0 0 1px var(--main);
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(20px);
    -ms-transform: translateX(20px);
    transform: translateX(20px);
  }

  /* Rounded sliders */
  .slider.round {
    border-radius: 34px;
  }

  .slider.round:before {
    border-radius: 50%;
  }
</style>