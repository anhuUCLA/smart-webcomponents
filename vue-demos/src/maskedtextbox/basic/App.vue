<template>
  <div class="vue-root">
    <smart-masked-text-box class="underlined" hint value mask="+1 (###) ### - ####"></smart-masked-text-box>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.maskedtextbox.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
</style>
