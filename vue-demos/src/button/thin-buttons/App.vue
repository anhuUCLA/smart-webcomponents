<template>
  <div class="vue-root">
    <div class="button-demo thin-buttons">
      <div class="header">
        <label>Thin Buttons</label>
      </div>
      <div class="buttons-group">
        <div class="box-1">
          <smart-button class="btn btn-one">
            <span>HOVER ME</span>
          </smart-button>
        </div>
        <div class="box-2">
          <smart-button class="btn btn-two">
            <span>HOVER ME</span>
          </smart-button>
        </div>
        <div class="box-3">
          <smart-button class="btn btn-three">
            <span>HOVER ME</span>
          </smart-button>
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
@import "https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300";

body {
  color: black;
  width: 100%;
  height: 100%;
  overflow: hidden;
  margin: 0;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  font-family: "Open Sans Condensed", sans-serif;
}

.button-demo label {
  font-size: 18px;
  font-weight: normal;
  font-family: auto;
}

/* Thin Buttons */
.header {
  margin-left: 10px;
  height: 10vh;
}

.buttons-group {
  height: 90vh;
}

div[class*="box"] {
  height: 33.33%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.box-1 {
  background-color: #ff6766;
}

.box-2 {
  background-color: #3c3c3c;
}

.box-3 {
  background-color: #66a182;
}

.btn {
  line-height: 50px;
  height: 50px;
  text-align: center;
  width: 250px;
  cursor: pointer;
  letter-spacing: 0.5px;
  font-family: "Open Sans Condensed", sans-serif;
}

/* 
========================
      BUTTON ONE
========================
*/
smart-button.btn-one {
  --smart-button-background: rgb(255, 103, 102);
  --smart-button-background-hover: rgb(255, 103, 102);
  --smart-button-background-focus: rgb(255, 103, 102);
  --smart-button-background-active: rgb(255, 103, 102);
  --smart-button-opacity-focus: initial;
  --smart-button-opacity-hover: initial;
  --smart-button-opacity-active: initial;
  --smart-border-width: 0;
  border: none;
  padding: 0;
  color: #fff;
  transition: all 0.3s;
  position: relative;
}

smart-button.btn-one:hover {
  color: #fff;
}

smart-button.btn-one:focus {
  outline: none;
}

smart-button.btn-one button {
  padding: 0;
  outline: none;
}

.btn-one span {
  transition: all 0.3s;
}

.btn-one::before {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0;
  transition: all 0.3s;
  border-top-width: 1px;
  border-bottom-width: 1px;
  border-top-style: solid;
  border-bottom-style: solid;
  border-top-color: rgba(255, 255, 255, 0.5);
  border-bottom-color: rgba(255, 255, 255, 0.5);
  transform: scale(0.1, 1);
  pointer-events: none;
}

.btn-one:hover span {
  letter-spacing: 2px;
}

.btn-one:hover::before {
  opacity: 1;
  transform: scale(1, 1);
}

.btn-one::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: all 0.3s;
  background-color: rgba(255, 255, 255, 0.1);
  outline: none;
  pointer-events: none;
}

.btn-one:hover::after {
  opacity: 0;
  transform: scale(0.1, 1);
}

/* 
========================
      BUTTON TWO
========================
*/
.btn-two {
  color: #fff;
  transition: all 0.5s;
  position: relative;
}

smart-button.btn-two {
  overflow: visible;
  color: #fff;
  --smart-button-background: #3c3c3c;
  --smart-button-background-hover: #3c3c3c;
  --smart-button-background-focus: #3c3c3c;
  --smart-button-background-active: #3c3c3c;
  --smart-button-opacity-focus: initial;
  --smart-button-opacity-hover: initial;
  --smart-button-opacity-active: initial;
  --smart-border-width: 0;
  padding: 0;
  border: none;
}

smart-button.btn-two:hover {
  color: #fff;
}

smart-button.btn-two button {
  overflow: hidden;
  outline: none;
  padding: 0;
  z-index: 2;
}

.btn-two:hover {
  color: white;
}

.btn-two span {
  z-index: 2;
  width: 100%;
  height: 100%;
}

.btn-two::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  transition: all 0.5s;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background-color: rgba(255, 255, 255, 0.1);
  pointer-events: none;
}

.btn-two::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 3;
  transition: all 0.5s;
  border: 1px solid rgba(255, 255, 255, 0.2);
  background-color: rgba(255, 255, 255, 0.1);
  pointer-events: none;
}

.btn-two:hover::before {
  transform: rotate(-45deg);
  background-color: rgba(255, 255, 255, 0);
}

.btn-two:hover::after {
  transform: rotate(45deg);
  background-color: rgba(255, 255, 255, 0);
}

/* 
========================
      BUTTON THREE
========================
*/
smart-button.btn-three {
  --smart-button-background: #66a182;
  --smart-button-background-hover: #66a182;
  --smart-button-background-focus: #66a182;
  --smart-button-background-active: #66a182;
  --smart-button-opacity-focus: initial;
  --smart-button-opacity-hover: initial;
  --smart-button-opacity-active: initial;
  --smart-border-width: 0;
  padding: 0;
  color: #fff;
  outline: none;
  transition: all 0.5s;
  position: relative;
  overflow: initial;
}

smart-button.btn-three:hover {
  color: #fff;
}

smart-button.btn-three button {
  overflow: hidden;
  outline: none;
}

.btn-three button {
  padding: 0;
}

.btn-three::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  background-color: rgba(255, 255, 255, 0.1);
  transition: all 0.3s;
  pointer-events: none;
}

.btn-three:hover::before {
  opacity: 0;
  transform: scale(0.5, 0.5);
}

smart-button.btn-three,
smart-button.btn-three button {
  border: none;
}

.btn-three::after {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  opacity: 0;
  transition: all 0.3s;
  border: 1px solid rgba(255, 255, 255, 0.5);
  transform: scale(1.2, 1.2);
  pointer-events: none;
}

.btn-three:hover::after {
  opacity: 1;
  transform: scale(1, 1);
}
</style>
