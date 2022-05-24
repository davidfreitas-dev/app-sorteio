<template>
  <div>
      
  </div>
</template>

<script>
import { toastController } from "@ionic/vue";
import { informationCircle } from 'ionicons/icons';

export default {
  props: {
    message: {
      type: String,
      require: true,
    },
    color: {
      type: String,
      require: true,
    },
  },
  methods: {
    async openToast() {
      const toast = await toastController.create({
        message: this.message,
        icon: informationCircle,
        color: this.color,
        duration: 2000,
      });
      return toast.present();
    },
  },
};
</script>

<style scoped>

</style>