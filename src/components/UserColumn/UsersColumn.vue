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
        let users: any = [];
        return {
            users
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
            var serverid = this.$route.query.id;
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
                result.forEach(entry => {
                    this.users.push({id: entry.id, nickName: entry.nickName})
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
        <UserItem v-for="user in users" :name=user.nickName :id=user.id /> 
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