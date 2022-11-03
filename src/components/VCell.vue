<template>
  <div class="cell">
    <div
      class="stone"
      :class="{ black: cell.isBlack(), white: cell.isWhite() }"
      @click="onClick"
    ></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Cell from "../models/cell";

@Component
export default class VCell extends Vue {
  @Prop() private cell!: Cell;

  onClick(): void {
    this.$emit("put", this.cell);
  }
}
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
.stone {
  width: 100%;
  height: 100%;
  border-radius: 50%;
}
.black {
  background-color: black;
}
.white {
  background-color: white;
}
</style>
