<script lang="ts">
import ServerIcon from "./ServerIcon.vue";
import router from "@/router";
import type { VueCookies } from "vue-cookies";
import { inject } from 'vue';
import * as Vue from 'vue';

export default {
    setup(){
        const $cookies = inject<VueCookies>('$cookies');
        return {
            $cookies,
        }
    },
    data() {
        let servers: any = [];
        return {
            servers
        }
    },
    mounted: async function(){
        let res = await fetch(import.meta.env.VITE_API_URL + "Member/fetchServers", {
            method: "GET",
            headers: new Headers({
                'Accept': "*/*",
                "Content-Type": "application/json",
                'Authorization': "Bearer " + this.$cookies?.get("jwt")
            })
        })
        res.json().then((result: Array<any>) => {
            result.forEach(entry => {
                this.servers.push({id: entry.serverId, servername: entry.server.name})
            });
            console.log(this.servers)
        })
    },
    components: {
        ServerIcon
    }
}

</script>

<template>
    <div ref="serverlist" class="server-list">
        <ServerIcon v-for="server in servers" :name=server.servername />
    </div>
</template>
<style scoped>
.server-list {
    display:flex;
    min-height:100vh;
    max-height:100vh;
    width:90px;
    background-color: #262626;
    flex-direction: column;
    align-items: center;
    padding:5px;
    padding-top:5px;
    padding-bottom:5px;
    gap: 7px;
    overflow:hidden;
    overflow-y:scroll;
    scrollbar-width: none;
}

.server-list::-webkit-scrollbar {
    display:none;
}

</style>