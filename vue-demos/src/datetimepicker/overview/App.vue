<template>
  <div class="vue-root">
    <section>
      <h2>DateTimePicker</h2>
      <br />
      <div>
        <p>
          Pickers provide a simple way to select a single value from a pre-determined
          set. Users can also input a Date Time value by using the DateTimePicker's
          input field.
        </p>
      </div>
    </section>
    <section id="usage">
      <br />
      <h2>Usage</h2>
      <div class="module">
        <p>On mobile, pickers are best suited for display in a confirmation dialog.</p>
        <p>
          <strong>Tiles</strong> hold content, and can vary in height within a list.
        </p>
      </div>
    </section>
    <section id="datePickers">
      <h2>Date pickers</h2>
      <br />
      <div class="module">
        <p>A dialog picker is used to select a single date on desktop or mobile.</p>
        <br />
        <p>
          The selected day is indicated by a filled circle. The current day is indicated
          by a different color and type weight.
        </p>
        <br />
        <p>
          Swipe left to right to navigate through the months. Touch the year in
          the title bar to transition to the year view.
        </p>
        <br />
        <smart-date-time-picker drop-down-position="bottom" calendar-button></smart-date-time-picker>
        <br />
        <br />
        <br />
        <br />
        <h2>Time Picker</h2>
        <smart-date-time-picker
          calendar-button
          drop-down-position="bottom"
          drop-down-display-mode="timePicker"
        ></smart-date-time-picker>
      </div>
    </section>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.datetimepicker.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      // Your code here.
    });
  }
};
</script>

<style>
body,
html {
  min-height: 1500px;
}
smart-date-time-picker {
  position: relative;
  left: 0px;
  width: 305px;
}
</style>
