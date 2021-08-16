<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <div class="box-80 border"></div>
    <div class="text-sm">text sm</div>
    <div class="text-base">text-base</div>
    <div class="text-lg">text-lg</div>
    <div class="text-lg leading-loose">text-lg leading-loose aaaa 啊一三丫</div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
};
</script>

<style lang="scss" scoped>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  @apply flex flex-col text-base;
  img {
    @apply w-400;
  }
}

.btn {
  @apply w-400 h-64 border-0 bg-primary;
}
</style>
