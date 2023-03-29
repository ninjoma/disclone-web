<template>
    <button className="btn btn-block no-animation btn-sm" @click="selectChannel()">
        <div class="w-full text-start">
            <font-awesome-icon class="pr-3" icon="fa-solid fa-hashtag" />
            <span>
                {{ this.name }}
            </span>
        </div>
    </button>
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