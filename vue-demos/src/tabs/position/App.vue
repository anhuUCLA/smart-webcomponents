<template>
  <div class="vue-root">
    <p>tabPosition: 'hidden'</p>
    <smart-tabs id="hiddenTabs" class="demoTabs animation" tab-position="hidden" selected-index="0">
      <smart-tab-item label="Snow leopard">
        <div class="demoContainer tabsContent">
          The snow leopard or ounce (
          <em>Panthera uncia</em> syn.
          <em>Uncia uncia</em>)
          is a large cat native to the mountain ranges of Central and South Asia.
        </div>
        <div class="demoContainer tabsContent">
          <img
            class="tabsDemoImage"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Lightmatter_snowleopard.jpg/220px-Lightmatter_snowleopard.jpg"
          />
        </div>
      </smart-tab-item>
      <smart-tab-item label="Cheetah">
        <div class="demoContainer tabsContent">
          The cheetah (
          <em>Acinonyx jubatus</em>) is a large felid of the subfamily
          Felinae. Cheetahs are active mainly during the day, with hunting their
          major activity.
        </div>
        <div class="demoContainer tabsContent">
          <img
            class="tabsDemoImage"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Cheetah_%28Acinonyx_jubatus%29_female_2.jpg/220px-Cheetah_%28Acinonyx_jubatus%29_female_2.jpg"
          />
        </div>
      </smart-tab-item>
      <smart-tab-item label="Cougar">
        <div class="demoContainer tabsContent">
          The cougar (
          <em>Puma concolor</em>), also commonly known as the mountain
          lion, puma, panther, or catamount, is a large felid of the subfamily Felinae
          native to the Americas.
        </div>
        <div class="demoContainer tabsContent">
          <img
            class="tabsDemoImage"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Cougar_25.jpg/220px-Cougar_25.jpg"
          />
        </div>
      </smart-tab-item>
    </smart-tabs>
    <br />
    <br />
    <br />
    <p>tabPosition: 'top'</p>
    <smart-tabs class="demoTabs animation" selected-index="0">
      <smart-tab-item label="Bengal tiger">
        <div class="demoContainer tabsContent">
          The Bengal tiger (
          <em>Panthera tigris tigris</em>) is the most numerous
          tiger. By 2011, the total population was estimated at fewer than 2,500
          individuals with a decreasing trend.
        </div>
        <div class="demoContainer tabsContent">
          <img
            class="tabsDemoImage"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Tiger_in_Ranthambhore.jpg/220px-Tiger_in_Ranthambhore.jpg"
          />
        </div>
      </smart-tab-item>
      <smart-tab-item label="Indochinese tiger">
        <div class="demoContainer tabsContent">
          The Indochinese tiger (
          <em>Panthera tigris corbetti</em>) is a tiger subspecies
          occurring in Myanmar, Thailand, Lao PDR, Viet Nam, Cambodia and southwestern
          China.
        </div>
        <div class="demoContainer tabsContent">
          <img
            class="tabsDemoImage"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Panthera_tigris_corbetti_%28Tierpark_Berlin%29_832-714-%28118%29.jpg/220px-Panthera_tigris_corbetti_%28Tierpark_Berlin%29_832-714-%28118%29.jpg"
          />
        </div>
      </smart-tab-item>
      <smart-tab-item label="Malayan tiger">
        <div class="demoContainer tabsContent">
          The Malayan tiger (
          <em>Panthera tigris jacksoni</em>) is a tiger subspecies
          that inhabits the southern and central parts of the Malay Peninsula and
          has been classified as Critically Endangered by IUCN in 2015 as the population
          was roughly estimated at 250 to 340 adult individuals in 2013; this population
          likely comprises less than 250 mature breeding individuals, with a declining
          trend.
        </div>
        <div class="demoContainer tabsContent">
          <img
            class="tabsDemoImage"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/MalayanTiger01.jpg/220px-MalayanTiger01.jpg"
          />
        </div>
      </smart-tab-item>
      <smart-tab-item label="Siberian tiger">
        <div class="demoContainer tabsContent">
          The Siberian tiger (
          <em>Panthera tigris altaica</em>), also called Amur
          tiger, is a tiger subspecies inhabiting mainly the Sikhote Alin mountain
          region with a small population in southwest Primorye Province in the Russian
          Far East. The Siberian tiger once ranged throughout all of Korea, north-eastern
          China, Russian Far East, and eastern Mongolia.
        </div>
        <div class="demoContainer tabsContent">
          <img
            class="tabsDemoImage"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/P.t.altaica_Tomak_Male.jpg/220px-P.t.altaica_Tomak_Male.jpg"
          />
        </div>
      </smart-tab-item>
    </smart-tabs>
    <br />
    <br />
    <br />
    <p>tabPosition: 'bottom'</p>
    <smart-tabs class="demoTabs animation" tab-position="bottom" selected-index="1">
      <smart-tab-item label="Asiatic lion">
        <div class="demoContainer tabsContent">
          The Asiatic lion (
          <em>Panthera leo persica</em>), also known as the Indian
          lion and Persian lion, is a lion subspecies that lives as a single population
          in Gujarat, India. It is listed as Endangered on the IUCN Red List because
          of its small population size.
        </div>
        <div class="demoContainer tabsContent">
          <img
            class="tabsDemoImage"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Adult_Asiatic_Lion.jpg/220px-Adult_Asiatic_Lion.jpg"
          />
        </div>
      </smart-tab-item>
      <smart-tab-item label="West African lion">
        <div class="demoContainer tabsContent">
          The West African lion (
          <em>Panthera leo senegalensis</em>), also called
          Senegal lion, was considered a lion subspecies native to Central and Western
          Africa.
        </div>
        <div class="demoContainer tabsContent">
          <img
            class="tabsDemoImage"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Lionne_du_Cameroun.JPG/220px-Lionne_du_Cameroun.JPG"
          />
        </div>
      </smart-tab-item>
      <smart-tab-item label="Ethiopian lion">
        <div class="demoContainer tabsContent">
          The Ethiopian lion (
          <em>Panthera leo roosevelti</em> syn.
          <em>Panthera leo abyssinica</em>),
          also called "Addis Ababa lion" or "Abyssinian lion," is considered a possible
          lion subspecies native to Ethiopia, following a genetic and phenotypic
          analysis on lions in Addis Abeba's zoo. Previously, researchers thought
          that the East African lion inhabited Ethiopia.
        </div>
        <div class="demoContainer tabsContent">
          <img
            class="tabsDemoImage"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/85/Lion_zoo_Addis_Ababa.jpg/220px-Lion_zoo_Addis_Ababa.jpg"
          />
        </div>
      </smart-tab-item>
      <smart-tab-item label="Masai lion">
        <div class="demoContainer tabsContent">
          The Masai lion or East African lion (
          <em>Panthera leo nubica</em> syn.
          <em>Panthera leo massaica</em>)
          is a lion subspecies in eastern Africa. The type specimen is described
          as being from "Nubia".
        </div>
        <div class="demoContainer tabsContent">
          <img
            class="tabsDemoImage"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Ngorongoro_Crater%2C_Tanzania_%282288742082%29.jpg/220px-Ngorongoro_Crater%2C_Tanzania_%282288742082%29.jpg"
          />
        </div>
      </smart-tab-item>
    </smart-tabs>
    <br />
    <br />
    <br />
    <p>tabPosition: 'left'</p>
    <smart-tabs class="demoTabs animation" tab-position="left" selected-index="2">
      <smart-tab-item label="African leopard">
        <div class="demoContainer tabsContent">
          <img
            class="tabsDemoImage"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Leopard_africa.jpg/220px-Leopard_africa.jpg"
          />The African leopard (
          <em>Panthera pardus pardus</em>) is the leopard nominate
          subspecies native to many countries in Africa. It is widely distributed
          in most of sub-Saharan Africa, but the historical range has been fragmented
          in the course of habitat conversion.
        </div>
      </smart-tab-item>
      <smart-tab-item label="Indian leopard">
        <div class="demoContainer tabsContent">
          <img
            class="tabsDemoImage"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Leopard_Male_Nagarhole.jpg/220px-Leopard_Male_Nagarhole.jpg"
          />The Indian leopard (
          <em>Panthera pardus fusca</em>) is a leopard subspecies
          widely distributed on the Indian subcontinent.
        </div>
      </smart-tab-item>
      <smart-tab-item label="Arabian leopard">
        <div class="demoContainer tabsContent">
          <img
            class="tabsDemoImage"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/de/%D7%A0%D7%9E%D7%A8.JPG/220px-%D7%A0%D7%9E%D7%A8.JPG"
          />The Arabian leopard (
          <em>Panthera pardus nimr</em>) is a leopard subspecies
          native to the Arabian Peninsula.
        </div>
      </smart-tab-item>
      <smart-tab-item label="Persian leopard">
        <div class="demoContainer tabsContent">
          <img
            class="tabsDemoImage"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7d/Persian_Leopard_sitting.jpg/220px-Persian_Leopard_sitting.jpg"
          />The Persian leopard (
          <em>Panthera pardus ciscaucasica</em> syn.
          <em>Panthera pardus saxicolor</em>),
          also called the Caucasian leopard or Central Asian leopard, is the largest
          leopard subspecies native to the Caucasus region.
        </div>
      </smart-tab-item>
    </smart-tabs>
    <br />
    <br />
    <br />
    <p>tabPosition: 'right'</p>
    <smart-tabs class="demoTabs animation" tab-position="right" selected-index="3">
      <smart-tab-item label="Eurasian lynx">
        <div class="demoContainer tabsContent">
          <img
            class="tabsDemoImage"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Lynx_lynx2.jpg/220px-Lynx_lynx2.jpg"
          />The Eurasian lynx (
          <em>Lynx lynx</em>) is a medium-sized cat native to
          Siberia, Central, East, and Southern Asia, North, Central and Eastern Europe.
        </div>
      </smart-tab-item>
      <smart-tab-item label="Canada lynx">
        <div class="demoContainer tabsContent">
          <img
            class="tabsDemoImage"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Canada_lynx_by_Michael_Zahra.jpg/220px-Canada_lynx_by_Michael_Zahra.jpg"
          />The Canada lynx (
          <em>Lynx canadensis</em>) or Canadian lynx is a North
          American mammal of the cat family, Felidae. With the recognised subspecies,
          it ranges across Canada and into Alaska as well as some parts of the northern
          United States and extending down the Rocky Mountains to Colorado, where
          they were reintroduced in the 1990s.
        </div>
      </smart-tab-item>
      <smart-tab-item label="Iberian lynx">
        <div class="demoContainer tabsContent">
          <img
            class="tabsDemoImage"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Linces19.jpg/220px-Linces19.jpg"
          />The Iberian lynx (
          <em>Lynx pardinus</em>) is a wild cat species native
          to the Iberian Peninsula in southwestern Europe that is listed as Endangered
          on the IUCN Red List. It preys almost exclusively on the European rabbit.
        </div>
      </smart-tab-item>
      <smart-tab-item label="Bobcat">
        <div class="demoContainer tabsContent">
          <img
            class="tabsDemoImage"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Bobcat2.jpg/220px-Bobcat2.jpg"
          />The bobcat (
          <em>Lynx rufus</em>) is a North American cat that appeared
          during the Irvingtonian stage of around 1.8 million years ago (AEO).
        </div>
      </smart-tab-item>
    </smart-tabs>
    <br />
    <br />
    <br />
    <div class="options">
      <div class="caption">Select Tab</div>
      <div class="option">
        <smart-radio-button checked group-name="selectTab">Snow leopard</smart-radio-button>
        <br />
        <smart-radio-button group-name="selectTab">Cheetah</smart-radio-button>
        <br />
        <smart-radio-button group-name="selectTab">Cougar</smart-radio-button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.radiobutton.js";
import "smart-webcomponents/source/modules/smart.tabs.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const selectTabRadioButtons = document.querySelectorAll(
          '[group-name="selectTab"]'
        ),
        hiddenTabs = document.getElementById("hiddenTabs");
      selectTabRadioButtons[0].addEventListener("change", function() {
        hiddenTabs.select(0);
      });
      selectTabRadioButtons[1].addEventListener("change", function() {
        hiddenTabs.select(1);
      });
      selectTabRadioButtons[2].addEventListener("change", function() {
        hiddenTabs.select(2);
      });
    });
  }
};
</script>

<style>
smart-tabs {
  width: 60%;
  height: 300px;
}

@media only screen and (max-width: 700px) {
  smart-tabs {
    width: 100%;
  }
}
</style>
