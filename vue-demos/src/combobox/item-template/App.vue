<template>
  <div class="vue-root">
    <smart-combo-box>
      <smart-list-items-group label="Swedish Cars">
        <smart-list-item selected value="volvo">Volvo</smart-list-item>
        <smart-list-item value="saab">Saab</smart-list-item>
        <smart-list-item value="saab">Scania</smart-list-item>
      </smart-list-items-group>
      <smart-list-items-group label="German Cars">
        <smart-list-item value="mercedes">Mercedes</smart-list-item>
        <smart-list-item value="vw">VW</smart-list-item>
        <smart-list-item value="audi">Audi</smart-list-item>
        <smart-list-item value="porsche">Porsche</smart-list-item>
      </smart-list-items-group>
      <smart-list-items-group label="Japanese Cars">
        <smart-list-item value="mazda">Mazda</smart-list-item>
        <smart-list-item value="honda">Honda</smart-list-item>
        <smart-list-item value="infinity">Infinity</smart-list-item>
        <smart-list-item value="mitsubishi">Mitsubishi</smart-list-item>
        <smart-list-item value="toyota">Toyota</smart-list-item>
      </smart-list-items-group>
    </smart-combo-box>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.combobox.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const comboBox = document.querySelector("smart-combo-box");
      comboBox.whenRendered(() => {
        const template = document.createElement("template");

        template.id = "template";
        template.innerHTML = `<span class="glyphicon glyphicon-ok"></span>
      <span style="margin-left:5px;">{{label}}</span>`;

        document.body.appendChild(template);
        comboBox.itemTemplate = "template";
      });
    });
  }
};
</script>

<style>
</style>
