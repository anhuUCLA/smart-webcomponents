<template>
  <div class="vue-root">
    <smart-splitter orientation="horizontal" id="horizontalSplitter" auto-fit-mode="overflow"></smart-splitter>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.splitter.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const splitter = document.querySelector("smart-splitter");
      splitter.dataSource = [
        {
          id: "item0",
          content:
            "<smart-splitter>" +
            '<smart-splitter-item collapsible id="item1">Item 1</smart-splitter-item>' +
            '<smart-splitter-item id="item2">Item 2</smart-splitter-item>' +
            '<smart-splitter-item collapsible id="item3">Item 3</smart-splitter-item>' +
            "</smart-splitter>"
        },
        {
          id: "item4",
          content: "Item 4"
        },
        {
          id: "item5",
          content: "Item 5"
        }
      ];
    });
  }
};
</script>

<style>
#horizontalSplitter smart-splitter-item:nth-of-type(1) {
  width: 500px;
  height: 250px;
}

#horizontalSplitter smart-splitter-item:nth-of-type(2) {
  width: 150px;
  height: 450px;
  /*height: 150px;*/
}

#horizontalSplitter smart-splitter-item:nth-of-type(3) {
  width: 150px;
  height: 250px;
}

#controlPanel {
  margin-top: 1%;
}

#horizontalSplitter {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 800px;
}
</style>
