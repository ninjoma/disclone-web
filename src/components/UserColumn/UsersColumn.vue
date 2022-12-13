<script lang="ts">
import type { VueCookies } from "vue-cookies";
import { inject } from 'vue';
import UserItem from "./UserItem.vue";

export default {
    setup(){
        const cookies = inject<VueCookies>('$cookies');
        return {
            cookies,
        }
    },
    data() {
        let members: any = [];
        return {
            members
        }
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
            let res = await fetch(import.meta.env.VITE_API_URL + "Member/listByserverId/" + serverid , {
                method: "GET",
                headers: new Headers({
                    'Accept': "*/*",
                    "Content-Type": "application/json",
                    'Authorization': "Bearer " + this.cookies?.get("jwt")
                })
            })
            res.json().then((result: Array<any>) => {
                this.members = [];
                result.forEach(entry => {
                    this.members.push({id: entry.id, username: entry.user.userName})
                });
            })
        },
    },
    components: {
        UserItem
    }
}
</script>
<template>
    <div class="users-col">
        <UserItem v-for="member in members" :name=member.username :id=member.id /> 
    </div>
</template>

<style scoped>
    .users-col{
        min-width:256px;
        background-color: #4f4d8c;
        height:100%;
        overflow:hidden;
        overflow-y:scroll;
        scrollbar-width: none;
    }
    .users-col::-webkit-scrollbar {
        display:none;
    }

    @media(max-width: 968px){
        .users-col{
            display:none;
        }
    }
</style>