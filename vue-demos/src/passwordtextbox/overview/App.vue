<template>
  <div class="vue-root">
    <div class="smart-demo-container">
      <section>
        <div>
          <h2>Password Text fields allow users to input and edit passwords.</h2>
          <div class="module">
            <p>
              Password Text fields typically reside in forms but can appear in other
              places, like dialog boxes and search.
            </p>
          </div>
        </div>
      </section>
      <section id="text-box-principles">
        <h2>Principles</h2>
        <div class="module">
          <p>Password Text fields should have the following characteristics:</p>
        </div>
        <div class="module">
          <h2>Identifiable</h2>
          <p>
            Using a tappable touch target, password text fields should indicate that
            users can enter information.
          </p>
          <h3>Findable</h3>
          <p>It should be easy to find a password text field among other elements.</p>
          <h3>Legible</h3>
          <p>
            Password Text fields should indicate their state – whether enabled or
            disabled, empty or filled, valid or invalid – with clear label, input,
            and assistive text.
          </p>
        </div>
      </section>
      <section id="text-box-layout">
        <h2>Layout</h2>
        <p>Password Text fields contain the following elements:</p>
        <br />
        <h3>Label</h3>
        <p>
          Password Text field labels display the type of input a field requires.
          Every text field should have a label.
          <br />Labels are aligned with the input line and always visible. They can be
          resting (when a field is inactive and empty) or floating.
        </p>
        <h3>Password Input line</h3>
        <p>
          The input line indicates where to enter text, displayed below the label.
          <br />When a field is active or contains an error, the line’s color and thickness
          vary.
        </p>
        <h3>Cursor</h3>
        <p>
          The cursor indicates the user’s current input position.
          <br />
          <br />
          <br />
        </p>
        <div>
          <div class="module">
            <smart-password-text-box></smart-password-text-box>
            <p>Password text box</p>
            <br />
            <smart-password-text-box disabled></smart-password-text-box>
            <p>Disabled</p>
            <p>Text field states in light and dark themes.</p>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.passwordtextbox.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
/* ------------ Google fonts ------------ */

/* fallback */
@font-face {
  font-family: "Material Icons";
  font-style: normal;
  font-weight: 400;
  src: url(https://fonts.gstatic.com/s/materialicons/v31/2fcrYFNaTjcS6g4U3t-Y5ZjZjT5FdEJ140U2DJYC3mY.woff2)
    format("woff2");
}

.material-icons {
  font-family: "Material Icons";
  font-weight: normal;
  font-style: normal;
  font-size: 24px;
  line-height: 1;
  letter-spacing: normal;
  text-transform: none;
  display: inline-block;
  white-space: nowrap;
  word-wrap: normal;
  direction: ltr;
  -webkit-font-feature-settings: "liga";
  -webkit-font-smoothing: antialiased;
}

/* ------------ */

.smart-demo-container {
  font-family: var(--smart-material-font-family);
  line-height: 24px;
  font-size: 13px;
  padding: 25px;
  margin-left: 0;
  margin: 5% 10%;
  padding-top: 50px;
}

.smart-demo-container section h2 {
  font-weight: 400;
  font-size: 24px;
  line-height: 40px;
  margin-bottom: 30px;
  color: #3949ab;
}

.smart-demo-container section:first-of-type h2 {
  font-size: 34px;
}

.smart-demo-container section:first-of-type div h2 {
  font-size: 20px;
}

.smart-demo-container section > h2:first-of-type {
  padding-top: 80px;
  border-top: 1px solid rgba(0, 0, 0, 0.12);
}

.smart-demo-container section {
  margin-top: 80px;
}

.smart-demo-container section:first-of-type {
  margin-top: 0;
}

.smart-demo-container section div h2 {
  color: #212121;
  font-size: 20px;
  font-weight: 400;
  line-height: 32px;
  margin-bottom: 20px;
  max-width: 940px;
}

.smart-demo-container nav {
  display: block;
  border-left: 5px #3949ab solid;
  padding-left: 20px;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  -webkit-font-smoothing: antialiased;
  font: inherit;
  margin-top: 60px;
}

.smart-demo-container nav ul {
  list-style: none;
  margin-top: 0;
  padding-left: 0;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  display: block;
  list-style-type: disc;
}

.smart-demo-container nav li {
  list-style: none;
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  font-size: 20px;
  line-height: 40px;
}

.smart-demo-container nav li a {
  text-decoration: none;
}

.smart-demo-container nav h2 {
  font-size: 15px;
  line-height: 16px;
  padding-bottom: 12px;
  font-weight: 400;
  color: #757575;
  margin: 0;
  padding: 0;
  border: 0;
  font: inherit;
  vertical-align: baseline;
  -webkit-margin-before: 1em;
  -webkit-margin-after: 1em;
  -webkit-margin-start: 0px;
  -webkit-margin-end: 0px;
}

.module {
  width: calc(100% / 4);
  display: inline-block;
  font: inherit;
  margin-right: 40px;
  min-width: 365px;
  vertical-align: top;
  position: relative;
}

.smart-demo-container .raised-demo-start {
  background-image: url(../../../images/raised-button-demo.png);
}

.module-wide {
  min-width: 755px;
  width: 800px;
  display: inline-block;
}

section .light-theme {
  background-color: #eeeeee;
  padding: 120px 60px 120px 60px;
}

section .dark-theme {
  background-color: #333333;
  padding: 120px 60px 120px 60px;
}

.module h3 {
  margin-top: 30px;
}

.module p {
  margin-bottom: 20px;
}

.module img {
  width: 100%;
}

/*Themes CSS*/
/* smart-text-box Material theme */
smart-text-box.material,
smart-text-box.material-dark {
  margin: 10px;
}

#requiredExample {
  height: 660px;
  padding: 0px;
  background-image: url("../../../images/required-example.png");
  background-repeat: no-repeat;
  background-size: 100% auto;
}

#requiredExample smart-text-box {
  position: absolute;
  left: 7px;
  top: 115px;
  --smart-text-box-default-width: 340px;
}

#requiredExample smart-text-box:nth-of-type(2) {
  top: 189px;
}

#requiredExample smart-text-box:nth-of-type(3) {
  top: 260px;
}

#requiredExample smart-text-box:nth-of-type(4) {
  top: 336px;
  left: 135px;
  --smart-text-box-default-width: 212px;
}

#requiredExample smart-text-box:nth-of-type(5) {
  top: 410px;
}

#requiredExample smart-text-box:nth-of-type(5) .smart-hint {
  padding-top: 50px;
}

#optionalExample {
  height: 660px;
  padding: 0px;
  background-image: url("../../../images/optional-example.png");
  background-repeat: no-repeat;
  background-size: 100% auto;
}

#optionalExample smart-text-box {
  position: absolute;
  left: 7px;
  top: 115px;
  --smart-text-box-default-width: 340px;
}

#optionalExample smart-text-box:nth-of-type(2) {
  top: 189px;
}

#optionalExample smart-text-box:nth-of-type(3) {
  top: 337px;
}

#optionalExample smart-text-box:nth-of-type(4) {
  top: 410px;
}

#optionalExample smart-text-box.material[focused] .smart-hint {
  display: block;
  border-top-color: #48cfad;
  position: absolute;
  left: 0px;
  top: 100%;
}

#singleFieldDemo1,
#singleFieldDemo2 {
  height: 660px;
  padding: 0px;
  background-image: url("../../../images/single1.png");
  background-repeat: no-repeat;
  background-size: 100% auto;
}

#singleFieldDemo1 smart-text-box {
  position: absolute;
  left: 5px;
  top: 100px;
  --smart-text-box-default-width: 340px;
}

#singleFieldDemo1 smart-text-box:nth-of-type(2) {
  top: 190px;
}

#singleFieldDemo2 {
  background-image: url("../../../images/single2.png");
}

#singleFieldDemo2 smart-text-box {
  position: absolute;
  left: 48px;
  top: 328px;
  --smart-text-box-default-width: 293px;
}

#singleFieldDemo2 smart-text-box:nth-of-type(2) {
  top: 410px;
  --smart-text-box-default-width: 148px;
}

#singleFieldDemo2 smart-text-box:nth-of-type(3) {
  top: 493px;
  --smart-text-box-default-width: 148px;
}

#singleFieldDemo2 smart-text-box.material[focused] .smart-label {
  color: #ff80ab;
}

#singleFieldDemo2 smart-text-box.material[focused] input {
  caret-color: #ff80ab;
  border-bottom-color: #ff80ab;
}

#singleFieldDemo2 smart-text-box.material[focused] .smart-hint {
  border-color: #ff80ab;
}

#singleFieldDemo1 smart-text-box.material input,
#singleFieldDemo2 smart-text-box.material input {
  font-weight: normal;
  font-size: 16px;
}

/* smart-multiline-text-box Material*/
#multiLineFieldDemo1,
#multiLineFieldDemo2 {
  position: relative;
  height: 660px;
  padding: 0px;
  background-image: url("../../../images/multi2.png");
  background-repeat: no-repeat;
  background-size: 100% auto;
}

#multiLineFieldDemo2 {
  background-image: url("../../../images/multi1.png");
}

#multiLineFieldDemo1 smart-multiline-text-box.material,
#multiLineFieldDemo2 smart-multiline-text-box.material {
  position: absolute;
  top: 80px;
  width: 100%;
  height: 245px;
}

#multiLineFieldDemo2 smart-multiline-text-box.material {
  top: 275px;
}

/* Text area demo*/
#textAreaDemo1,
#textAreaDemo2 {
  position: relative;
  height: 660px;
  padding: 0px;
  background-image: url("../../../images/area1.png");
  background-repeat: no-repeat;
  background-size: 100% auto;
}

#textAreaDemo2 {
  background-image: url("../../../images/area2.png");
}

#textareaMessage1,
#textareaMessage2 {
  --smart-material-pressed-color: #ebb402;
  width: 340px;
  height: 167px;
  position: absolute;
  top: 206px;
  left: 17px;
  border-radius: 3px;
}

#textareaMessage2 {
  top: 143px;
}

#textareaMessage1 .smart-inner-container::before,
#textareaMessage2 .smart-inner-container::before {
  position: absolute;
  left: 0px;
  top: 0px;
  content: "";
  width: 100%;
  height: 30px;
  background-color: #202020;
}

.light-theme smart-multiline-text-box.material[auto-expand],
.dark-theme smart-multiline-text-box.material-dark[auto-expand] {
  width: 230px;
  display: block;
}

.light-theme smart-multiline-text-box.material[auto-expand][focused],
.dark-theme smart-multiline-text-box.material-dark[auto-expand][focused],
.light-theme smart-multiline-text-box.material[auto-expand].hovered,
.dark-theme smart-multiline-text-box.material-dark[auto-expand].hovered {
  margin-bottom: 59px;
}

/* layout demo 1 */
#layoutName,
#layoutAddress,
#layoutCity,
#layoutZip,
#layoutPhone {
  position: absolute;
  --smart-material-pressed-color: #ff80ab;
}

#layoutProductName,
#layoutPrice,
#layoutLocation,
#layoutDescription {
  position: absolute;
  --smart-material-pressed-color: #009688;
}

#layoutState,
#layoutProductCategory {
  --smart-material-pressed-color: #ff80ab;
  position: absolute;
  left: 7px;
  top: 337px;
  font-size: 16px;
  width: 110px;
}

#layoutProductCategory {
  --smart-material-pressed-color: #009688;
  top: 262px;
  width: 340px;
}

/* single Line demo 1 col 1*/
#singleLineEvent,
#singleLineLocation {
  --smart-material-pressed-color: #009688;
}

#singleLineCheckbox {
  position: absolute;
  left: 6px;
  top: 458px;
  font-size: 16px;
  width: 150px;
  height: 50px;
}

#singleLineCheckbox:focus {
  background-color: transparent;
  border-radius: 0px;
}

#singleLineCheckbox .smart-input {
  width: 18px;
  height: 18px;
}

#singleLineCheckboxLabel {
  position: absolute;
  left: 59px;
  top: 472px;
  font-size: 16px;
}

#singleLineStartDate,
#singleLineEndDate {
  position: absolute;
  left: 16px;
  top: 280px;
  width: 190px;
  font-size: 16px;
}

#singleLineEndDate {
  top: 380px;
}

#singleLineStartDate .smart-calendar-button::after,
#singleLineEndDate .smart-calendar-button::after {
  content: "\E804";
  font-size: 10px;
}

#singleLineStartTime,
#singleLineEndTime {
  position: absolute;
  left: 222px;
  top: 280px;
  width: 135px;
  font-size: 16px;
}

#singleLineEndTime {
  top: 380px;
}

#singleLineStartTime .smart-calendar-button::after,
#singleLineEndTime .smart-calendar-button::after {
  content: "\E804";
  font-size: 10px;
}

smart-date-time-picker.material[focused]
  > .smart-container
  > .smart-content:after {
  left: 0px;
  width: 100%;
}

#singleLineName,
#singleLinePhoneNumber,
#singleLineEmail,
#singleLinePhone,
#singleLineEmailType {
  --smart-material-pressed-color: #ff80ab;
}

#singleLinePhone,
#singleLineEmailType {
  position: absolute;
  left: 212px;
  top: 410px;
  width: 132px;
  font-size: 16px;
}

#singleLineEmailType {
  top: 493px;
}

/* multiLine demo 1 col 1*/
#multilineDescription1,
#multilineDescription2 {
  width: 340px;
}

#multilineDescription1 textarea,
#multilineDescription2 textarea {
  background-color: transparent;
}

#multilinePrice1,
#multilineLocation1 {
  --smart-material-pressed-color: #2979ff;
  position: absolute;
  left: 6px;
  top: 175px;
  width: 95px;
  font-size: 16px;
}

#multilineLocation1 {
  left: 119px;
  width: 225px;
}

#multilinePrice1 input {
  padding-left: 15px;
}

#multilinePrice1 .smart-content::before {
  content: "$";
  position: absolute;
  left: 0px;
  top: 3px;
  font-size: 16px;
}

/* multiLine demo 1 col 2*/
#multilineTitle2,
#multilinePrice2,
#multilineLocation2 {
  --smart-material-pressed-color: #2979ff;
  position: absolute;
  left: 7px;
  top: 205px;
  width: 95px;
  font-size: 16px;
}

#multilineTitle2 {
  top: 115px;
  width: 340px;
}

#multilineLocation2 {
  left: 119px;
  width: 225px;
}

#multilinePrice2 input {
  padding-left: 15px;
}

#multilinePrice2 .smart-content::before {
  content: "$";
  position: absolute;
  left: 0px;
  top: 3px;
  font-size: 16px;
}

/*textarea*/

#textareaName,
#textareaPhone,
#textareaEmail {
  --smart-material-pressed-color: #ebb402;
  position: absolute;
  left: 7px;
  top: 122px;
  width: 337px;
}

#textareaPhone {
  top: 444px;
}

#textareaEmail {
  top: 506px;
}
</style>
