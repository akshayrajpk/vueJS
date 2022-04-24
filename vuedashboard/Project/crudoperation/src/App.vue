<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
  <!-- <HelloWorld msg="Hello Vue 3 + Vite" /> -->
  <!-- <Login/> -->
  <router-view/>

</template>

<script setup>
import HelloWorld from './components/HelloWorld.vue'
import Login from './components/LoginPage.vue'
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