<script lang="ts">
import { defineComponent } from 'vue';
import ServerIcon from './ServerIcon.vue';
import { ServerIconData } from './ServerIcon.vue'

export default defineComponent({
    data() {
        let servers: ServerIconData[] = [
            {id: 1, name: "Cool Server"},
            {id: 2, name: "Master Server"},
            {id: 3, name: "Mega Server"},
            {id: 4, name: "Minecraft Server"},
            {id: 5, name: "[] - Coding Community"},
            {id: 6, name: "The next Generation"},
            {id: 7, name: "Music Genre Finder"},
            {id: 8, name: "r/ - Official Reddit Disclone Server"},
            {id: 9, name: "CS - Counter Strike Community"},
            {id: 10, name: "SteamDB: Steam News"},
            {id: 11, name: "The Beginning. Free MMORPG. Play now!"},
            {id: 12, name: "Server Restoration Projects"},
            {id: 13, name: "Mini Server"},
            {id: 14, name: "XBOX Official Community"},
            {id: 15, name: "PS - Playstation Official Community"},
        ];
        return {
            servers
        }
    },
    components: {
        ServerIcon
    }
})
</script>
<template>
    <div class="overflow-hidden w-20">
        <div class="flex h-screen min-h-screen max-h-screen w-20 flex-col items-center
        p-1 bg-base-300 scrollbar-hide gap-2 overflow-y-scroll border-r-2 border-zinc-700">
            <ServerIcon v-for="server in servers" :name=server.name :id=server.id />
        </div>
    </div>
</template>