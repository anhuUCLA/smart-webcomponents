<template>
  <div class="vue-root">
    <div class="smart-demo-container">
      <div id="materialPagerContainer">
        <section>
          <div>
            <div class="module">
              <p>
                smartPager provides navigation for paged information, typically used with
                a grid or table.
              </p>
            </div>
            <div class="module"></div>
          </div>
        </section>
        <section id="usage">
          <h2>Usage</h2>
          <div class="module">
            <h2>Navigation</h2>
            <p>User can navigate between pages and/or items via built-in optional buttons.</p>
          </div>
          <smart-pager
            show-prev-next-navigation-buttons
            auto-ellipsis="both"
            show-page-index-selectors
            pages-count="20"
            page-index-selectors="10"
          ></smart-pager>
        </section>
        <section id="pager-mobile">
          <h2>Mobile</h2>
          <div class="module"></div>
          <div class="module">
            <div id="pager-mobile-container" style="position:relative;">
              <div id="imageContainer">
                <div id="content" class="img0">
                  <img src="https://htmlelements.com/demos/images/albums_pop.png" />
                  <img src="https://htmlelements.com/demos/images/albums_alternative.png" />
                  <img src="https://htmlelements.com/demos/images/albums_rock.png" />
                </div>
              </div>
              <smart-pager
                id="mobile"
                show-page-index-selectors
                pages-count="5"
                page-index-selectors="5"
              ></smart-pager>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.pager.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {});
  }
};
</script>

<style>
/* ------------ Google fonts ------------ */ /* APACHE LICENSE 2.0 ! */

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
  font-size: inherit;
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
.smart-demo-container {
  padding: 0;
  margin: 0 !important;
}
/* ------------ */
#materialPagerContainer {
  line-height: 24px;
  font-size: 13px;
  margin: 5% 10%;
}
.smart-demo-container section h2 {
  font-weight: 400;
  font-size: 24px;
  line-height: 40px;
  margin-bottom: 30px;
  color: #764ebe;
}
#materialPagerContainer section h2 {
  font-weight: 400;
  font-size: 24px;
  line-height: 40px;
  margin-bottom: 30px;
  color: #764ebe;
}
#materialPagerContainer section:first-of-type h2 {
  font-size: 34px;
}
#materialPagerContainer section:first-of-type div h2 {
  font-size: 20px;
}
#materialPagerContainer section {
  margin-top: 80px;
}
#materialPagerContainer section:first-of-type {
  margin-top: 0;
}
#materialPagerContainer section div h2 {
  color: #212121;
  font-size: 20px;
  font-weight: 400;
  line-height: 32px;
  margin-bottom: 30px;
  max-width: 940px;
}
#materialPagerContainer nav {
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
#materialPagerContainer nav ul {
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
#materialPagerContainer nav li {
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
#materialPagerContainer nav li a {
  text-decoration: none;
}
#materialPagerContainer nav h2 {
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
  min-width: 355px;
  vertical-align: top;
}
.module h3 {
  font-size: 13px;
}
.module p {
  margin-bottom: 20px;
}
.module img {
  width: 100%;
}
.module h2 {
  font-weight: 400;
}
#materialPagerContainer section:first-of-type .module:first-of-type {
  width: calc(100% / 2 + 45px);
}
#materialPagerContainer section:first-of-type .module:nth-of-type(4) {
  margin-top: 40px;
}
#materialPagerContainer .preview smart-drop-down-list {
  --smart-drop-down-element-height: auto;
  --smart-drop-down-list-default-width: 30%;
}
#materialPagerContainer #usage .dropDownListUsage,
#materialPagerContainer #style .dropDownListLightTheme,
#materialPagerContainer #style .dropDownListDarkTheme,
#materialPagerContainer #dropDownListSelectionModes .dropDownSelections,
#materialPagerContainer #dropDownListOpenModes .dropDownOpenModes {
  width: calc(100% / 2 + 45px);
  height: 300px;
  margin-top: 50px;
  margin-bottom: 80px;
}
#materialPagerContainer #style .dropDownListLightTheme {
  margin-top: 0;
}
#materialPagerContainer #style .dropDownListDarkTheme {
  background-color: #000;
}
#materialPagerContainer #style .module:nth-of-type(3) {
  margin-top: 50px;
}
#materialPagerContainer #style th,
#materialPagerContainer #dropDownListSelectionModes th,
#materialPagerContainer #dropDownListOpenModes th {
  padding-left: 15px;
}
#materialPagerContainer .dropDownListUsage smart-drop-down-list,
#materialPagerContainer #style smart-drop-down-list {
  --smart-drop-down-element-height: auto;
}

#materialPagerContainer .dropDownListUsage table,
#materialPagerContainer .continuousTankLightTheme table,
#materialPagerContainer .continuousTankDarkTheme table,
#materialPagerContainer .dropDownListLightTheme table,
#materialPagerContainer .dropDownListDarkTheme table,
#materialPagerContainer .dropDownSelections table,
#materialPagerContainer .dropDownOpenModes table {
  width: 100%;
  height: 100%;
  padding: 50px;
  text-align: justify;
}

@media (max-width: 1026px) {
  #materialPagerContainer .dropDownListUsage table,
  #materialPagerContainer .continuousTankLightTheme table,
  #materialPagerContainer .continuousTankDarkTheme table,
  #materialPagerContainer .dropDownListLightTheme table,
  #materialPagerContainer .dropDownListDarkTheme table,
  #materialPagerContainer .dropDownSelections table,
  #materialPagerContainer .dropDownOpenModes table {
    padding: 2px;
  }
}
#materialPagerContainer .continuousTankLightTheme table,
#materialPagerContainer .dropDownListLightTheme table,
#materialPagerContainer .dropDownOpenModes table,
#materialPagerContainer .dropDownSelections table {
  background-color: #eeeeee;
}
#materialPagerContainer .dropDownListDarkTheme table,
#materialPagerContainer .continuousTankDarkTheme table {
  color: white;
  background-color: #000;
}

#materialPagerContainer #style h2:first-of-type,
#materialPagerContainer #dropDownListSelectionModes h2:first-of-type,
#materialPagerContainer #dropDownListOpenModes h2:first-of-type,
#materialPagerContainer #demoDropDown h2:first-of-type {
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  font-weight: 400;
  font-size: 24px;
  line-height: 40px;
  margin-bottom: 30px;
  color: #3949ab;
  padding-top: 80px;
  width: calc(100% - 280px);
}

#materialPagerContainer #dropDownListSelectionModes smart-drop-down-list,
#materialPagerContainer #dropDownListOpenModes smart-drop-down-list {
  --smart-drop-down-element-height: auto;
}

#source {
  border-top: 1px solid rgba(0, 0, 0, 0.12);
  padding-top: 80px;
}
#pager1a,
#pager1b,
#pager1c,
#pager1d,
#pager1e {
  height: 35px;
}

#pager1a .smart-container,
#pager1b .smart-container,
#pager1c .smart-container,
#pager1d .smart-container,
#pager1e .smart-container {
  justify-content: center;
}

#pager-mobile-container {
  width: 360px;
  height: 640px;
  background-image: url(https://htmlelements.com/demos/images/components-tabs-usage-example3.png);
}

#mobile {
  width: 100%;
  height: 40px;
  position: absolute;
  left: 0px;
  top: 490px;
  border: none;
  background-color: transparent;
}

#mobile .smart-container {
  justify-content: center;
}

#mobile .smart-items-container {
  align-items: center;
}

#mobile .smart-pager-page-index-selector {
  width: 6px;
  height: 6px;
  background-color: white;
  color: white;
  margin: 5px;
}
#mobile .smart-pager-page-index-selector[selected] {
  width: 10px;
  height: 10px;
  background: red;
  color: red;
}
#mobile .smart-pager-page-index-selectors-container {
  background: black;
  color: white;
  border: none;
}

#imageContainer {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0px;
  top: 110px;
  overflow: hidden;
}

#content {
  width: 1080px;
  position: absolute;
  top: 0px;
  transition: left 0.35s ease-in-out;
}

#content img {
  float: left;
  width: auto;
}

.img0 {
  left: 0px;
}

.img1 {
  left: -360px;
}

.img2 {
  left: -720px;
}
</style>
