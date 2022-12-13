<script lang="ts">
import ServerList from "./ServerList.vue";
import ChannelButton from "./ChannelButton.vue";
import UserControls from "./UserControls.vue";
import type { VueCookies } from "vue-cookies";
import { inject } from 'vue';

export default {
    data() {
        let channels: any = [];
        let servername = "";
        const user: any = {};
        const cookies = inject<VueCookies>('$cookies');
        var serverid;
        return {
            cookies,
            channels,
            user,
            servername,
            serverid
        }
    },
    components: {
        ChannelButton,
        UserControls,
        ServerList
    },
    created(){
        this.$watch(() => this.$route.params,
        () => {
            this.fetchInfo();
        })
    },
    mounted(){
        this.fetchInfo();
    },
    methods: {
        fetchInfo: async function(){
            var serverid: any = this.$route.query.id;
            if(serverid == null){
                return;
            }
            let channelres = await fetch(import.meta.env.VITE_API_URL + "Channel/ListByServer/" + serverid, {
                method: "GET",
                headers: new Headers({
                    'Accept': "*/*",
                    "Content-Type": "application/json",
                    'Authorization': "Bearer " + this.cookies?.get("jwt")
                })
            })
            let userres = await fetch(import.meta.env.VITE_API_URL + "User/getUserInfo/", {
                method: "GET",
                headers: new Headers({
                    'Accept': "*/*",
                    "Content-Type": "application/json",
                    'Authorization': "Bearer " + this.cookies?.get("jwt")
                })
            })
            channelres.json().then((result: Array<any>) => {
                this.channels = [];
                this.servername = result[0].server.name
                result.forEach(entry => {
                    this.channels.push({id: entry.id, name: entry.name, type: entry.type == 0 ? "text" : "voice"})
                });
            })
            userres.json().then((result: any)=> {
                this.user.userName = result.userName;
            });
        },

    },
}
</script>

<template>
    <div class="server-col">
        <ServerList/>
        <div class="server-contents-col">
            <div class="server-header">
                <span id="servername">{{ servername }}</span>
                <i class="bi bi-chevron-down"></i>
            </div>
            <div class="server-channels">
                <ChannelButton v-for="channel in channels" :name=channel.name :id=channel.id :type=channel.type />
            </div>
            <UserControls v-if="user" :username="user.userName"/>
        </div>
    </div>
</template>

<style scoped>
.server-col {
    display:flex;
    background-color:#4f4d8c;
    min-width:300px;
    height:100%;
}

.server-contents-col {
    width:100%; 
    display:flex; 
    flex-direction: column;
}

.server-channels {
    padding:10px;
    overflow:hidden;
    overflow-y:scroll;
    scrollbar-width: none;
    flex:1;
}

.server-channels::-webkit-scrollbar {
    display:none;
}

.server-header {
    position:sticky;
    height:50px;
    width:100%;
    display:flex;
    align-items: center;
    justify-content: space-between;
    padding:10px;
    padding-left:20px;
    padding-right:20px;
    border-bottom: 2px solid rgba(0,0,0,0.2);
    font-family: 'Open Sans';
    font-weight:bolder;
    color:white;
}

</style>