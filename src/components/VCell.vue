<template>
  <div class="cell"></div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class VCell extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.cell {
  background-color: green;
  width: 100%;
  height: 100%;
  border: 2px solid black;
  box-sizing: border-box;
}
</style>
