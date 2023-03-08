<script lang="ts">
import { SignalRService } from '@dreamonkey/vue-signalr';
import { defineComponent, inject } from 'vue';
export default defineComponent({
    data(){
        return {
            message: ""
        }
    },
    setup(){
        const hub: SignalRService = inject('$hub')!;
        return {
            hub
        }
    },
    created(){
        console.log(this.hub);
        this.hub.on("test", (message) => {
            this.message += message;
        })
    }
})
</script>

<template>
    <div>
        <p>SignalR. Check Console</p>
        <p>{{ message }}</p>
    </div>
</template>