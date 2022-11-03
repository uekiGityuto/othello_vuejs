<template>
  <div class="row">
    <VCell></VCell>
    <VCell></VCell>
    <VCell></VCell>
    <VCell></VCell>
    <VCell></VCell>
    <VCell></VCell>
    <VCell></VCell>
    <VCell></VCell>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import VCell from "./VCell.vue";

@Component({
  components: {
    VCell,
  },
})
export default class VRow extends Vue {}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: stretch
}
</style>
