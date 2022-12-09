<script setup lang="ts">
import loginComponent from "../components/SigninComponents/LoginComponent.vue";
import registerComponent from "../components/SigninComponents/RegisterComponent.vue";
</script>

<template>
  <main>
    <div class="rl-bg"></div>
    <loginComponent />
    <registerComponent />
  </main>
</template>

<style scoped>
.rl-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: url("https://wallpapercrafter.com/th800/107454-Discord-dark-background.png");
}
</style>
