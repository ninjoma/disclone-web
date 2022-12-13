<script lang="ts">
import type { VueCookies } from "vue-cookies";
import { inject } from "vue";
export default {
    data(){
        const cookies = inject<VueCookies>("$cookies");
    return {
      cookies,
        }
    },
    props: ['type', 'name', 'id'],
    methods: {
        redirect: function () {
            var megquery = this.$route.query
            this.$router.push({ name: "server", query: { id: this.$route.query.id, channel: this.id } });
        },
        deleteChannel: function (id: number) {
            fetch(import.meta.env.VITE_API_URL + "Channel/ToggleInactiveById/" + id, {
                method: "DELETE",
                headers: new Headers({
                    Accept: "*/*",
                    "Content-Type": "application/json",
                    Authorization: "Bearer " + this.cookies?.get("jwt"),
                }),
            }).then(() => {
                this.$router.push({ name: "server", query: { id: this.$route.query.id, refreshChannel: "a" } }).then(() => {
                    this.$router.push({ name: "server", query: { id: this.$route.query.id } })
                });
            })
        }
    }
}
</script>

<template>
    <button class="channel" v-on:click="redirect">
        <i v-if="type === 'text'" class="bi bi-quote icon-big"></i>
        <i v-if="type === 'voice'" class="bi bi-volume-down-fill icon-big"></i>
        <span class="name">{{ name }}</span>
        <button v-on:click="deleteChannel(id)" class="deleteButton">
            <i class="bi bi-x"></i>
        </button>
    </button>
</template>

<style scoped>
.channel {
    width: 100%;
    font-family: 'Open Sans';
    text-align: left;
    border: 0;
    background-color: #4f4d8c;
    border-radius: 5px;
    height: 32px;
    color: white;
    margin-top: 5px;
    margin-bottom: 5px;
    display: flex;
    align-items: center;
}
.deleteButton{
    margin-left: auto;
    margin-right: 0.1rem;
    background-color: transparent;
    border: transparent;
    color: white;
}

.channel>i {
    padding-right: 5px;
}

.channel:hover {
    background-color: #5F5DA6;
}
</style>