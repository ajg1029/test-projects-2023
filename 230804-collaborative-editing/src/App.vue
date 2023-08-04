<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <!-- <Test001 /> -->
    <Test002 />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Test001 from './components/Test001.vue'
import Test002 from './components/Test002.vue';

export default {
  name: 'App',
  components: {
    // HelloWorld
    // Test001
    Test002
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
