<template>
    <div class="w-full flex flex-col justify-center">
        <TextInput class="w-full" :leftLabel="$t('CHANNEL.CHANNELNAME')" v-model:modelValue="this.ChannelName" @onChange="CheckData()" :showError="this.BadChannelName"/>
        <button className="btn btn-outline my-3 " @click="createChannel()">{{ $t('CHANNEL.ADDCHANNEL') }}</button>
    </div>
</template>
<script lang="ts">
import TextInput from '../Inputs/TextInput.vue';
import { Api } from "../../Gateway/Api.js";
import { mapGetters } from 'vuex';

export default {
    components: {
        TextInput
    },
    computed: {
        ...mapGetters({
            GetServerId: 'Server/GetCurrentServerId'
        })
    },
    data(){
        return {
            ChannelName: "",
            BadChannelName: false,
        }
    },
    methods: {
        createChannel(){
            if (this.ChannelName.trim() != ''){
                Api({
                    method: 'post',
                    url: 'servers/' + this.GetServerId + "/channels",
                    data: {
                        id: 0,
                        name: this.ChannelName,
                        type: 1,
                        isActive: true,
                    }
                }).then(function (response) {
                    this.$emit('ChannelCreated');
                }.bind(this))
                this.ChannelName = "";
            }
        },
        CheckData(){
            if (this.ChannelName.trim() == "") {
                this.BadChannelName = true;
            } else {
                this.BadChannelName = false;
            }
        }
    }
}
</script>