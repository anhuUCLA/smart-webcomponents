<template>
  <div class="vue-root">
    <label>Button Flip. Hover the Button to Flip it</label>
    <div class="button-demo button-flip">
      <div class="demo-buttons-group">
        <smart-button class="flip-btn">
          <a href="javascript:void(0)" class="btn-flip" data-back="Back" data-front="Front"></a>
        </smart-button>
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

.demo-buttons-group {
  margin-top: 20px;
}

smart-button.flip-btn {
  --smart-button-opacity-focus: initial;
  --smart-button-opacity-hover: initial;
  --smart-button-opacity-active: initial;
  background: transparent;
  font-family: "Open Sans";
  font-size: 16px;
  font-weight: 400;
  border-radius: 0;
  width: auto;
  height: auto;
  padding: 0;
  border: none;
  outline: none;
}

smart-button.flip-btn button {
  padding: 0;
}

.btn-flip {
  opacity: 1;
  outline: 0;
  color: #fff;
  line-height: 40px;
  position: relative;
  text-align: center;
  letter-spacing: 1px;
  display: inline-block;
  text-decoration: none;
  font-family: "Open Sans";
  text-transform: uppercase;
}

.btn-flip:hover:after {
  opacity: 1;
  -webkit-transform: translateY(0) rotateX(0);
  transform: translateY(0) rotateX(0);
}

.btn-flip:hover:before {
  opacity: 0;
  -webkit-transform: translateY(50%) rotateX(90deg);
  transform: translateY(50%) rotateX(90deg);
}

.btn-flip:after {
  top: 0;
  left: 0;
  opacity: 0;
  width: 100%;
  color: #323237;
  display: block;
  transition: 0.5s;
  position: absolute;
  background: #adadaf;
  content: attr(data-back);
  -webkit-transform: translateY(-50%) rotateX(90deg);
  transform: translateY(-50%) rotateX(90deg);
}

.btn-flip:before {
  top: 0;
  left: 0;
  opacity: 1;
  color: #adadaf;
  display: block;
  padding: 0 30px;
  line-height: 40px;
  transition: 0.5s;
  position: relative;
  background: #323237;
  content: attr(data-front);
  -webkit-transform: translateY(0) rotateX(0);
  transform: translateY(0) rotateX(0);
}
</style>
