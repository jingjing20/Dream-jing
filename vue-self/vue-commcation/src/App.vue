<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <sec-tion />
    <parent />
  </div>
</template>

<script>
import SecTion from "./view/section";
import Parent from "./view/parent";

export default {
  name: "App",
  components: {
    SecTion,
    Parent
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
