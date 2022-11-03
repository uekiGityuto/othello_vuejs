<template>
  <div id="app">
    <div class="header">
      <h1>オセロ</h1>
    </div>
    <div class="main">
      <VBoard msg="Welcome to Your Vue.js + TypeScript App" />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import VBoard from "./components/VBoard.vue";

@Component({
  components: {
    VBoard,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
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
</style>
