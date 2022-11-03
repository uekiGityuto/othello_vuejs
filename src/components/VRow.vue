<template>
  <div class="row">
    <VCell
      v-for="cell in row.cells"
      :key="`${cell.x}-${cell.y}`"
      :cell="cell"
      @put="onClick"
    ></VCell>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import VCell from "./VCell.vue";
import Cell from "../models/cell";
import Row from "../models/row";

@Component({
  components: {
    VCell,
  },
})
export default class VRow extends Vue {
  @Prop() private row!: Row;

  onClick(cell: Cell): void {
    this.$emit("put", cell);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.row {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: stretch;
}
</style>
