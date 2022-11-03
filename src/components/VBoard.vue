<template>
  <div class="board">
    <VRow></VRow>
    <VRow></VRow>
    <VRow></VRow>
    <VRow></VRow>
    <VRow></VRow>
    <VRow></VRow>
    <VRow></VRow>
    <VRow></VRow>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import VRow from "./VRow.vue";

@Component({
  components: {
    VRow,
  },
})
export default class VBoard extends Vue {
  @Prop() private msg!: string;
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
