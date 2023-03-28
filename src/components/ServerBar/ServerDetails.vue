<script lang="ts">
import { defineComponent } from 'vue';
import ChannelButton from './ChannelButton.vue'
import CreateChannelButton from '../Inputs/CreateChannelButton.vue';

export default defineComponent({
    components: {
        ChannelButton,
        CreateChannelButton
    }
})
</script>
<template>
    <div className="flex flex-col grow">
        <div className="h-16 border-b-2 p-2 flex items-center border-zinc-700">
            <div className="flex-1 px-2 mx-2 w-full flex items-center">
                <div className="text-2xl pr-2">
                    <font-awesome-icon icon="fa-solid fa-server" />
                </div>
                <span className="font-bold text-sm uppercase italic" v-if="Object.keys(this.$store.getters['Server/GetCurrentServer']).length > 0">{{ this.$store.getters['Server/GetCurrentServer'].name }}</span>
                <span className="font-bold text-sm uppercase italic" v-if="Object.keys(this.$store.getters['Server/GetCurrentServer']).length === 0">{{ $t('SERVER.NOSELECTEDSERVER') }}</span>
            </div>
        </div>
        <div class="grow">
            <div className="flex flex-col p-3 gap-2">
                <ChannelButton v-for="channel in this.$store.getters['Channel/GetChannels']" :name="channel.name" :channel-id="channel.id"/>
                <CreateChannelButton v-if="Object.keys(this.$store.getters['Server/GetCurrentServer']).length > 0" />
            </div>
        </div>
        <div className="flex h-16 bg-base-300 items-center justify-between px-5">
            <span>{{ this.$store.getters['User/GetUserData'].username }}</span>
            <div className="flex gap-4 text-xl items-center">
                <font-awesome-icon icon="fa-solid fa-microphone" />
                <font-awesome-icon icon="fa-solid fa-headphones-simple" />
                <div>
                    <router-link to="/settings"><font-awesome-icon icon="fa-solid fa-gears" /></router-link>
                </div>
            </div>
        </div>
    </div>
    
</template>