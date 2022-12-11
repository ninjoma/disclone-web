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
  background-image: url("https://images-ext-1.discordapp.net/external/SXMP-tiLu-A5ThDh8fZ3JwfRCh_qqTTtvjrrcIiMX5Q/https/discord.com/assets/d20e43cdcadf850cfd8d4e953df0f3b4.png");
}
</style>
