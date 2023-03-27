<script lang="ts">
import { defineComponent } from 'vue';
import ServerIcon from './ServerIcon.vue';
import { ServerIconData } from './ServerIcon.vue'
import NewServerButton from '../UI/NewServerButton.vue';

export default defineComponent({
    data() {
        return {
        }
    },
    mounted(){
        this.$store.dispatch('Server/fetchServers')
    },
    components: {
        ServerIcon,
        NewServerButton
    }
})
</script>
<template>
    <div class="w-20">
        <div class="flex h-screen min-h-screen max-h-screen w-20 flex-col items-center
        p-1 bg-base-300 scrollbar-hide gap-2 overflow-y-scroll border-r-2 border-zinc-700">
            <ServerIcon v-for="server in this.$store.getters['Server/GetServers']" :name=server.name :id=server.id />
            <NewServerButton></NewServerButton>
        </div>
    </div>
</template>