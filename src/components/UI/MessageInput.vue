<template>
    <div className="sticky bottom-0 w-full flex h-16 items-center justify-between p-5 bg-base-100">
        <input type="text" placeholder="Type here" className="input w-full bg-base-300" v-on:keyup.enter="SendMessage()" v-model="this.message"/>
    </div>
</template>
<script lang="ts">
import { mapGetters } from "vuex";
import { Api } from "../../Gateway/Api.js";

export default {
    data(){
        return {
            message: '',
        }
    },
    computed: {
        ...mapGetters({
            getChannelId: 'Channel/GetCurrentChannelId',
            getUserId: 'User/GetUserId',
        })
    },
    methods: {
        SendMessage() {
            if (this.message.trim() != '') {
                Api({
                    method: 'post',
                    url: '/messages',
                    data: {
                        id: 0,
                        isActive: true,
                        userId: this.getUserId,
                        channelId: this.getChannelId,
                        content: this.message,
                        creationDate: new Date(),
                    }
                }).then(function (response) {
                    this.$emit('messageSended');
                    this.$store.dispatch('Channel/UpdateMessages', this.getChannelId);
                }.bind(this))
                this.message = "";
            }
        }
    }
}
</script>