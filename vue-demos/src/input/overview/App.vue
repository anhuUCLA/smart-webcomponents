<template>
  <div class="vue-root">
    <div class="demo-description">
      <p>
        <b>Smart.Input</b> is a simple input that can have a predefined options
        list.
      </p>
      <p>
        <b>RenderMode</b> radio buttons allow to change the appearance of the input.
      </p>
    </div>
    <smart-input placeholder="Empty"></smart-input>
    <div class="options">
      <div class="option">
        <div class="description">Render Mode</div>
        <smart-radio-button checked class="render-mode">Default</smart-radio-button>
        <smart-radio-button class="render-mode">Outlined</smart-radio-button>
        <smart-radio-button class="render-mode">Underlined</smart-radio-button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.input.js";
import "smart-webcomponents/source/modules/smart.radiobutton.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      let input = document.querySelector("smart-input");
      document
        .querySelector(".options")
        .addEventListener("change", function(event) {
          const target = event.target;
          if (target.classList.contains("render-mode")) {
            input.classList.remove("underlined", "outlined");
            const textContent = target.textContent.toLowerCase();
            if (textContent.indexOf("underlined") > -1) {
              input.classList.add("underlined");
            } else if (textContent.indexOf("outlined") > -1) {
              input.classList.add("outlined");
            }
          }
        });
    });
  }
};
</script>

<style>
</style>
