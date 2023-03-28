<script lang="ts">
import { defineComponent } from 'vue';
import ServerIcon from './ServerIcon.vue';
import { ServerIconData } from './ServerIcon.vue'
import NewServerButton from '../UI/NewServerButton.vue';
import { mapGetters } from 'vuex';
import HomeButton from '../UI/HomeButton.vue';

export default defineComponent({
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters({
            fetchServers: "Server/GetServers",
        })
    },
    async mounted() {
        await this.$store.dispatch('Server/fetchServers');
    },
    components: {
        ServerIcon,
        NewServerButton,
        HomeButton
    }
})
</script>
<template>
    <div class="w-20">
        <div class="flex h-screen min-h-screen max-h-screen w-20 flex-col items-center
            p-1 bg-base-300 scrollbar-hide gap-2 overflow-y-scroll border-r-2 border-zinc-700">
            <ServerIcon v-for="server in fetchServers" :name=server.name :id=server.id />
            <NewServerButton></NewServerButton>
            <HomeButton/>
        </div>
    </div>
</template>