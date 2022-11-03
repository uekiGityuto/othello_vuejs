<template>
  <div class="board">
    <VRow v-for="row in board.rows" :key="row.num" :row="row" @put="put"></VRow>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import VRow from "./VRow.vue";
import { Color } from "../models/color";
import Cell from "../models/cell";
import Board from "../models/board";

@Component({
  components: {
    VRow,
  },
})
export default class VBoard extends Vue {
  @Prop() private turn!: Color;
  @Prop() private board!: Board;

  put(cell: Cell): void {
    if (this.board.put(cell, this.turn)) {
      this.$emit("changeTurn", true);
    } else {
      this.$emit("changeTurn", false);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.board {
  height: 100%;
  aspect-ratio: 1/1;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
}
</style>
