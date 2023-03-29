<template>
    <div class="flex flex-col h-full items-center justify-center h-screen">
        <div class="card w-96 bg-neutral text-neutral-content">
            <div class="card-body items-center text-center">
                <h2 class="card-title">{{ this.$t("SERVER.INVITATIONTITLE") }}</h2>
                <button class="btn btn-primary w-full" v-on:click="join()">{{ this.$t("ACCEPT") }}</button>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Api } from "../Gateway/Api.js";

export default {
    data() {
        return {
            ServerId: null,
        }
    },
    mounted() {
        this.ServerId = this.$route.params.server
    },
    methods: {
        join(){
            Api({
                method: "get",
                url: '/members/me/servers/' + this.ServerId,
            }).then(function (response){
                this.$router.push("/server");
            }.bind(this));
        },
    },
}
</script>