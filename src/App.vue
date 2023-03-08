<script lang="ts">
import { defineComponent } from 'vue';
import { RouterView } from "vue-router";
import { useSignalR } from '@dreamonkey/vue-signalr';
import { provide } from "vue";

export default defineComponent({
  components: {

  },
  setup() {
    provide('$hub', useSignalR()); // Websocket RealTime Connection
  }
})
</script>

<template>
  <RouterView/>
</template>
