<template>
  <div class="home">
    <div class="btn-area">
      <button class="game-btn" @click="moveGame">ゲーム開始</button>
    </div>
    <div class="img-area">
      <img class="home-img" alt="othello" src="../assets/othello.jpg" />
    </div>
  </div>
</template>


<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class VHome extends Vue {
  moveGame() {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    this.$router.push("/game");
  }
}
</script>

<style scoped>
.btn-area {
  margin-top: 16px;
}

.game-btn {
  width: 114px;
  height: 36px;
  font-weight: bold;
  color: white;
  background-color: darkgreen;
  cursor: pointer;
}

.img-area {
  margin-top: 16px;
}

.home-img {
  height: 84vh;
  width: auto;
}
</style>
