<template>
  <div class="game">
    <div class="header">
      <h1>オセロ</h1>
      <div class="note">
        {{ note }} <span class="warning">{{ warning }}</span>
      </div>
      <div class="result">黒の数: {{ blackNum }}、白の数: {{ whiteNum }}</div>
    </div>

    <div class="main">
      <VBoard :board="board" :turn="turn" @doAfterPut="doAfterPut"></VBoard>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import VBoard from "./VBoard.vue";
import { BLACK, Color } from "../models/color";
import Board from "../models/board";
import Game from "../models/game";

@Component({
  components: {
    VBoard,
  },
})
export default class VGame extends Vue {
  private turn: Color = BLACK;
  private board = new Board();
  private game = new Game();
  private warning = "";

  doAfterPut(ok: boolean): void {
    if (ok) {
      this.turn = this.game.changeTurn(this.turn);
      this.warning = "";
    } else {
      this.warning = "そこには置けません。";
    }
  }

  get note(): string {
    if (this.turn === BLACK) {
      return "黒の手番です。";
    } else {
      return "白の手番です。";
    }
  }

  get blackNum(): number {
    return this.board.countBlack();
  }

  get whiteNum(): number {
    return this.board.countWhite();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.game {
  display: flex;
  flex-direction: column;
  height: 96vh;
}

.header {
  margin-top: 8px;
}

.header h1 {
  margin: 2px;
}

.main {
  margin-top: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 1 100%;
}

.note {
  font-weight: bold;
}

.warning {
  color: red;
}
</style>
