<script lang="ts">
import { defineComponent } from 'vue';
import { RouterView } from "vue-router";
import { useSignalR } from '@dreamonkey/vue-signalr';
import { provide } from "vue";
import LoadingComponent from "./components/UI/LoadingComponent.vue";

export default defineComponent({
  components: {
    LoadingComponent
  },
  mounted() {
    this.$store.dispatch('User/fetchUserData');
  },
  setup() {
    provide('$hub', useSignalR()); // Websocket RealTime Connection
  }
</script>

<template>
  <LoadingComponent />
  <RouterView />
</template>
