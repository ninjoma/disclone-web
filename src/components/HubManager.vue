<script lang="ts">
import { defineComponent } from 'vue';
import { SignalRService, useSignalR } from "@dreamonkey/vue-signalr";
import { inject } from "vue";

export default defineComponent({
    setup() {
        var $hub: SignalRService = inject('$hub')!;
        $hub.on("test", (message) => {
            console.log(message);
        })
    }
})
</script>
<template>

</template>