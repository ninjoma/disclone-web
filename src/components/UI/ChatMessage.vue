<script lang="ts">
import { Api } from "../../Gateway/Api.js";
import { mapGetters } from "vuex";

export default {
    data() {
        return {
            formattedDate: "",
            editMode: false
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
        deleteMessage() {
            Api({
                method: 'delete',
                url: '/messages/' + this.message.id,
            }).then(function (response) {
                this.$store.dispatch('Channel/UpdateMessages', this.getChannelId);
            }.bind(this))
        },
        saveMessage(){
            Api({
                method: 'put',
                url: '/messages/' + this.message.id,
                data: {
                    id: this.message.id,
                    content: this.message.content,
                    channelId: this.message.channel.id,
                    userId: this.getUserId,
                    isActive: true
                }
            }).then(function (response) {
                this.$store.dispatch('Channel/UpdateMessages', this.getChannelId);

            }.bind(this))
        }
    }
}
</script>
<template>
    <div v-if="editMode == false"
        :class="'relative chat hover:bg-base-200 duration-300 p-2 message ' + (message.userId == this.$store.getters['User/GetUserId'] ? 'chat-start' : 'chat-end')">
        <div className="chat-header">
            {{ message.user.username }}
            <time className="text-xs opacity-50">{{ formattedDate }}</time>
        </div>
        <div className="chat-bubble">{{ message.content }}</div>
        <div class="btn-group absolute -top-2 right-0 mx-4 tools" v-if="message.userId == this.$store.getters['User/GetUserId']">
            <button class="btn btn-sm" v-on:click="editMode = true">
                <font-awesome-icon class='px-2 cursor-pointer' icon="fa-solid fa-pen-to-square" />
            </button>
            <button class="btn btn-sm" v-on:click="deleteMessage()">
                <font-awesome-icon class='px-2 cursor-pointer' icon="fa-solid fa-trash-can" />
            </button>
        </div>
    </div>
    <div v-if="editMode == true" class="input-group p-2">
        <input type="text" v-model="message.content" className="input input-bordered w-full" />
        <button class="btn" v-on:click="saveMessage(); editMode = false"><font-awesome-icon icon="fa-solid fa-floppy-disk" /></button>
        <button class="btn btn-error" v-on:click="editMode = false"><font-awesome-icon icon="fa-solid fa-xmark" /></button>
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