<template>
  <ion-header>
    <ion-toolbar>
      <ion-row class="ion-justify-content-between ion-align-items-center">
        <div>
          <ion-title class="brand">
            Dave<ion-text>dev</ion-text>
          </ion-title>
        </div>
        <div>
          <ion-row class="ion-justify-content-between ion-align-items-center">
            <ion-icon name="moon"></ion-icon>
            <ion-toggle class="themeToggle" name="blueberry" @click="toggleTheme"></ion-toggle>
          </ion-row>
        </div>
      </ion-row>
    </ion-toolbar>
  </ion-header>
</template>

<script>
import {
  IonHeader,
  IonTitle,
  IonText,
  IonToolbar,
  IonRow,
  IonToggle,
  IonIcon,
} from "@ionic/vue";

export default {
  components: {
    IonHeader,
    IonTitle,
    IonText,
    IonToolbar,
    IonRow,
    IonToggle,
    IonIcon,
  },
  methods: {
    loadColorsTheme() {
      const toggle = document.querySelector(".themeToggle");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)");

      prefersDark.addEventListener("change", (e) => checkToggle(e.matches));
      checkToggle(prefersDark.matches);
      
      function checkToggle(shouldCheck) {
        toggle.checked = shouldCheck;
        document.documentElement.classList.toggle("dark");
      }
    },
    toggleTheme() {
      document.documentElement.classList.toggle("dark");
    },
  },
  created() {
    this.$nextTick(() => {
      this.loadColorsTheme();
    });
  },
};
</script>

<style>
.brand {
  font-weight: 700;
  letter-spacing: -0.5px;
}

.brand ion-text {
  font-size: 0.85rem;
  color: var(--main);
  margin: 0 0.15rem;
}

@media only screen and (min-width: 550px) {
	ion-toolbar {
    width: 80%;
    margin: auto;
  }
}

@media only screen and (min-width: 768px) {
	ion-toolbar {
    width: 70%;
    margin: auto;
  }
}
</style>