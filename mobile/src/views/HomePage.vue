<template>
  <ion-page>
    <header-top></header-top>
    <ion-content :fullscreen="true">
      <div class="container">
        <ion-title class="page__title">Sorteio de Nomes</ion-title>
        <name-draw @error="showErrorMsg"></name-draw>
        <toast-msg ref="toast" :message="errorMsg" :color="'danger'"></toast-msg>
      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import HeaderTop from '../components/HeaderTop.vue'
import NameDraw from '../components/NameDraw.vue'
import ToastMsg from '../components/ToastMsg.vue'
import { IonContent, IonPage, IonTitle } from '@ionic/vue';

export default ({
  name: 'HomePage',
  components: {
    IonContent,
    IonPage,
    IonTitle,
    HeaderTop,
    NameDraw,
    ToastMsg
  },
  data() {
    return {
      errorMsg: null
    }
  },
  methods: {
    showErrorMsg(errorMsg) {
      this.errorMsg = errorMsg
      this.$nextTick(() =>{
        this.$refs.toast.openToast()
      })
    }
  },
});
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: .85rem;
}

.container strong {
  font-size: 20px;
  line-height: 26px;
}

.container p {
  font-size: 16px;
  line-height: 22px;  
  color: #8c8c8c;  
  margin: 0;
}

.container a {
  text-decoration: none;
}

.page__title {
  color: var(--font);
  font-size: 1.5rem;
  font-weight: 700;
}
</style>
