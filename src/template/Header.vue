<template>
  <header class="header">
    <h2>Dave <span>dev</span></h2>
    <nav class="nav">
      <span class="menu__toggle" aria-label="Abrir menu" aria-haspopup="true" aria-controls="menu" aria-expanded="false">
        <!-- icone menu toglle -->
      </span>
      <ul class="nav__list" role="menu">
        <li class="nav__item">
          <span class="theme__toggle">Theme Toggle</span>
        </li>        
        <div class="social__media">
            <!-- icones com links para mídias sociais -->
        </div>
      </ul>
    </nav>
  </header>
</template>

<script>
export default {
  
}
</script>

<style>
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
    box-shadow: 0px -5px 10px 3px #3c3c3c;
  }
  .header__logo {
    height: 70px;
  }
  .menu__toggle {
    display: none;
  }
  .nav__list {
    display: flex;
    gap: .5rem;
  }
  .nav__link {
    display: block;
    font-size: 1.1rem;
    font-weight: 500;
    padding: .5rem;
    color: var(--text-color);
  }
  .nav__link:hover {
    border-radius: 5px;
    color: #fff;
    background-color: #00cac7;
  }
  .social__media {
    display: none;
  }
  header h2 span {
    color: var(--main);
  }
</style>