<template>
  <div class="vue-root">
    <smart-carousel auto-play slide-show loop></smart-carousel>
    <smart-carousel class="fade" auto-play slide-show loop></smart-carousel>
    <smart-carousel class="slide" auto-play slide-show loop></smart-carousel>
    <smart-carousel class="slide-right" auto-play slide-show loop></smart-carousel>
    <smart-carousel class="slide-top" auto-play slide-show loop></smart-carousel>
    <smart-carousel class="slide-bottom" auto-play slide-show loop></smart-carousel>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.carousel.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const basePath = "../../../images/",
        carousels = document.getElementsByTagName("smart-carousel");

      function generateDataSource(items) {
        const headlines = [
            "Lorem ipsum dolor sit amet",
            "Pellentesque facilisis",
            "Mauris tempus elit et metus sollicitudin",
            "Cras dictum mauris et erat",
            "Duis in libero eu tortor"
          ],
          contentParagraphs = [
            `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia, purus ac bibendum volutpat, justo orci finibus nulla, sed laoreet velit mauris eget est. Donec venenatis elit sit amet dui tempor, quis ornare augue viverra. In varius ut erat at cursus. Phasellus mollis odio sit amet neque imperdiet pharetra. Nam ut diam elementum, tempus lectus eget, pulvinar ligula. Morbi sit amet gravida justo. Integer ex orci, vulputate laoreet ornare sit amet, vehicula vel erat. Suspendisse molestie lacus sed fringilla pulvinar.`,
            `Nullam eget fermentum tellus. Nullam hendrerit ante eget pharetra ornare. Pellentesque posuere arcu elit, ut sagittis sapien lobortis quis. Duis ac aliquet lorem, vel ornare mauris. Aliquam lobortis blandit neque. Duis eros tellus, congue a faucibus non, pulvinar vitae magna. Morbi eu mauris velit. Sed in fringilla leo. Nullam ut odio ante. In gravida tortor sed tempor sagittis. Integer blandit, ligula eu blandit suscipit, nunc risus condimentum lectus, quis viverra orci tortor at est. Sed augue lacus, efficitur non purus quis, porta maximus metus.`,
            `Maecenas placerat vitae nunc sed egestas. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam erat volutpat. Aliquam bibendum elit tempus sodales vestibulum. Maecenas a dapibus leo. Ut porta elit purus, eu lobortis nisl vehicula at. Aliquam vel ipsum ut metus ullamcorper porttitor. Nulla et facilisis orci, sed varius velit. In molestie in elit suscipit tincidunt.`,
            `Cras euismod iaculis tellus et laoreet. Proin eleifend porttitor mattis. Maecenas in dolor dignissim, mollis lacus consequat, tempus nunc. Morbi lacus ante, convallis eget rutrum eu, consectetur nec augue. Nullam vel sodales nulla. Donec in rhoncus odio, non cursus enim. Donec at mauris sit amet justo sagittis eleifend. Vivamus vel ligula id purus venenatis lobortis. Integer laoreet fermentum urna in lacinia. Maecenas sed urna eu ligula porta elementum non sit amet tortor. Praesent tincidunt laoreet quam ac congue. Sed eu ex ac lectus suscipit aliquet. Vivamus interdum ullamcorper sapien ut aliquam. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce faucibus posuere dolor in sollicitudin. Sed scelerisque fermentum urna, at ultricies lacus rutrum sed.`,
            `Aliquam scelerisque elit pharetra, finibus turpis quis, dictum ex. Morbi venenatis sodales commodo. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. In vitae tortor magna. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Proin in diam lacinia, ultricies dui in, cursus lectus. Cras risus lorem, rhoncus ac neque quis, auctor gravida leo. In hac habitasse platea dictumst. Nunc nulla felis, porttitor et tempor consectetur, pretium in nisl. Vivamus sollicitudin dolor gravida risus cursus viverra.`
          ];
        let dataSource = [];
        for (let i = 0; i < items; i++) {
          const item = {
            image: `${basePath}carousel-medium-${i + 1}.jpg`,
            label: headlines[parseInt("" + Math.random() * 5)].substring(
              0,
              5 + Math.random() * 10
            ),
            content:
              contentParagraphs[parseInt("" + Math.random() * 5)].substring(
                0,
                50 + Math.random() * 10
              ) + "."
          };
          dataSource.push(item);
        }
        return dataSource;
      }
      for (let i = 0; i < carousels.length; i++) {
        carousels[i].interval = 2000;
        carousels[i].dataSource = generateDataSource(6);
      }
    });
  }
};
</script>

<style>
smart-carousel {
  display: inline-block;
}

smart-carousel,
smart-carousel .smart-arrow:after {
  color: white;
}

smart-carousel .smart-indicator {
  border-color: white;
}
</style>
