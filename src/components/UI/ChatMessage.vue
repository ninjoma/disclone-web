<script lang="ts">
import { Api } from "../../Gateway/Api.js";
import { mapGetters } from "vuex";

export default {
    data() {
        return {
            formattedDate: ""
        }
    },
    props: ['message'],
    created() {
        var date = new Date(this.message.creationDate);
        this.formattedDate = ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2) + " " + date.getDate() + '/' + date.getMonth() + "/" + date.getFullYear();
    },
    computed: {
        ...mapGetters({
            getChannelId: 'Channel/GetCurrentChannelId',
            getUserId: 'User/GetUserId',
        })
    },
    methods: {
        deleteChannel() {
            Api({
                method: 'delete',
                url: '/messages/' + this.message.id,
            }).then(function (response) {
                this.$store.dispatch('Channel/UpdateMessages', this.getChannelId);
            }.bind(this))
        }
    }
}
</script>
<template>
    <div
        :class="'relative chat hover:bg-base-200 duration-300 p-2 message ' + (message.userId == this.$store.getters['User/GetUserId'] ? 'chat-start' : 'chat-end')">
        <div className="chat-header w-full  ">
            {{ message.user.username }}
            <time className="text-xs opacity-50">{{ formattedDate }}</time>
        </div>
        <div className="chat-bubble">{{ message.content }}</div>
        <div class="btn-group absolute -top-2 right-0 mx-4 tools" v-if="message.userId == this.$store.getters['User/GetUserId']">
            <button class="btn btn-sm" v-on:click="">
                <font-awesome-icon class='px-2 cursor-pointer' icon="fa-solid fa-pen-to-square" />
            </button>
            <button class="btn btn-sm" v-on:click="deleteChannel()">
                <font-awesome-icon class='px-2 cursor-pointer' icon="fa-solid fa-trash-can" />
            </button>
        </div>
    </div>
</template>
<style lang="css">
.tools {
    display: none;
}

.message:hover>.tools {
    display: inline !important;
}
</style>