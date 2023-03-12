<script lang="ts">
import { defineComponent } from 'vue';
import { RouterView } from "vue-router";
import LoadingComponent from "./components/UI/LoadingComponent.vue"

export default defineComponent({
  components: {
    LoadingComponent
  },
  mounted() {
    this.$store.dispatch('User/fetchUserData');
  },
})
</script>

<template>
  <LoadingComponent />
  <RouterView />
</template>
