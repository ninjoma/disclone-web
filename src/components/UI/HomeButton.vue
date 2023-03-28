<template>
    <div class="w-full w-16 h-16 min-h-[4.5rem] bg-base-200 border-2 border-primary flex items-center justify-center hover-radius-change cursor-pointer " v-on:click="GoHome()">
        <font-awesome-icon :icon="['fas', 'house']" class="text-primary"/>
    </div>
</template>
<script lang="ts">
export default {
    methods: {
        GoHome() {
            this.$store.dispatch('Server/clearCurrentServer')
            this.$store.dispatch('Channel/ClearCurrentChannel')
        }
    }
}
</script>