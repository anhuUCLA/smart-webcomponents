<template>
  <div class="vue-root">
    <div class="button-demo rounded-pulse-button">
      <label>Rounded Pulse Button</label>
      <div class="demo-buttons-group">
        <div class="text-box">
          <smart-button class="smart-button-element btn btn-white btn-animate">click me</smart-button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.button.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
.button-demo {
  margin-top: 20px;
  margin-left: 20px;
}

.button-demo label {
  font-size: 18px;
  font-weight: normal;
  font-family: auto;
  color: black;
}

.demo-buttons-group {
  margin-top: 20px;
}

smart-button.btn {
  height: 48px;
  width: auto;
  font-family: sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  text-decoration: none;
  display: inline-block;
  border-radius: 100px;
  transition: all 0.2s;
  position: absolute;
  overflow: visible;
  padding: 0;
  --smart-button-opacity-focus: initial;
  --smart-button-opacity-hover: initial;
  --smart-button-opacity-active: initial;
}

smart-button.btn button {
  outline: none;
  overflow: hidden;
  background: white;
  border-radius: 100px;
}

smart-button.btn:hover {
  -webkit-transform: translateY(-3px);
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

smart-button.btn:active {
  -webkit-transform: translateY(-1px);
  transform: translateY(-1px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

smart-button.btn-white:not(smart-button) {
  background-color: #fff;
  color: #777;
}

smart-button.btn::after {
  content: "";
  display: inline-block;
  height: 100%;
  width: 100%;
  border-radius: 100px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  transition: all 0.4s;
}

smart-button.btn-white::after {
  background-color: #fff;
}

smart-button.btn:hover::after {
  -webkit-transform: scaleX(1.4) scaleY(1.6);
  transform: scaleX(1.4) scaleY(1.6);
  opacity: 0;
}

smart-button.btn-animated {
  -webkit-animation: moveInBottom 5s ease-out;
  animation: moveInBottom 5s ease-out;
  -webkit-animation-fill-mode: backwards;
  animation-fill-mode: backwards;
}

@-webkit-keyframes moveInBottom {
  0% {
    opacity: 0;
    -webkit-transform: translateY(30px);
    transform: translateY(30px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
  }
}

@keyframes moveInBottom {
  0% {
    opacity: 0;
    -webkit-transform: translateY(30px);
    transform: translateY(30px);
  }

  100% {
    opacity: 1;
    -webkit-transform: translateY(0px);
    transform: translateY(0px);
  }
}
</style>
