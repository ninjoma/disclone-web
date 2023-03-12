<template>
    <button className="btn btn-block" @click="selectChannel()">{{ this.name }}</button>
</template>
<script lang="ts">
import { number } from '@intlify/core-base';

export default {
    props: {
        name: {
            type: String,
            default: '',
            required: false,
        },
        channelId: null,

    },
    methods: {
        selectChannel(){
            this.$store.dispatch('Channel/SelectChannel', this.channelId);
        }
    }
}
</script>