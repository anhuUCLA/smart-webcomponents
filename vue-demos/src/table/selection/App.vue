<template>
  <div class="vue-root">
    <div class="demo-description">This demo showcases row selection in smart-table.</div>
    <smart-table id="table" selection>
      <table>
        <thead>
          <tr>
            <th scope="col">Country</th>
            <th scope="col">Area</th>
            <th scope="col">Population_Rural</th>
            <th scope="col">Population_Total</th>
            <th scope="col">GDP_Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Brazil</td>
            <td>8515767</td>
            <td>0.15</td>
            <td>205809000</td>
            <td>2353025</td>
          </tr>
          <tr>
            <td>China</td>
            <td>9388211</td>
            <td>0.46</td>
            <td>1375530000</td>
            <td>10380380</td>
          </tr>
          <tr>
            <td>France</td>
            <td>675417</td>
            <td>0.21</td>
            <td>64529000</td>
            <td>2846889</td>
          </tr>
          <tr>
            <td>Germany</td>
            <td>357021</td>
            <td>0.25</td>
            <td>81459000</td>
            <td>3859547</td>
          </tr>
          <tr>
            <td>India</td>
            <td>3287590</td>
            <td>0.68</td>
            <td>1286260000</td>
            <td>2047811</td>
          </tr>
          <tr>
            <td>Italy</td>
            <td>301230</td>
            <td>0.31</td>
            <td>60676361</td>
            <td>2147952</td>
          </tr>
          <tr>
            <td>Japan</td>
            <td>377835</td>
            <td>0.07</td>
            <td>126920000</td>
            <td>4616335</td>
          </tr>
          <tr>
            <td>Russia</td>
            <td>17098242</td>
            <td>0.26</td>
            <td>146544710</td>
            <td>1857461</td>
          </tr>
          <tr>
            <td>United States</td>
            <td>9147420</td>
            <td>0.19</td>
            <td>323097000</td>
            <td>17418925</td>
          </tr>
          <tr>
            <td>United Kingdom</td>
            <td>244820</td>
            <td>0.18</td>
            <td>65097000</td>
            <td>2945146</td>
          </tr>
        </tbody>
      </table>
    </smart-table>
  </div>
</template>

<script>
import { onMounted } from "vue";
import "smart-webcomponents/source/styles/smart.default.css";
import "smart-webcomponents/source/modules/smart.table.js";

export default {
  name: "app",
  setup() {
    onMounted(() => {
      const table = document.getElementById("table");
      table.whenRendered(() => {
        table.select(1);
        table.select(2);
        table.select(5);
      });
    });
  }
};
</script>

<style>
</style>
