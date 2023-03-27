<script lang="ts">
import { defineComponent } from 'vue';
import ChatMessage from './ChatMessage.vue';

export default defineComponent({
    components: {
        ChatMessage
    }
})
</script>
<template>
<div className="drawer">
    <input id="serverbar-toggle" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex flex-col" style="transition-property: none; !important; transition-duration: 0ms !important;">
        <div className="w-full navbar bg-base-200 border-b-2 border-zinc-700">
            <div className="flex-none lg:hidden">
                <label htmlFor="serverbar-toggle" className="btn btn-square btn-ghost text-xl">
                    <font-awesome-icon icon="fa-solid fa-bars"/>
                </label>
            </div>
        <div className="flex-1 px-2 mx-2">
            <div className="pr-2 text-2xl">
                <font-awesome-icon icon="fa-regular fa-comment" />
            </div>
            {{this.$store.getters['Channel/GetCurrentChannel'].name}}</div>
            <div className="flex-none hidden lg:block">
            </div>
            <label htmlFor="my-drawer-4" className="drawer-button btn btn-square btn-ghost text-xl lg:hidden">
                <font-awesome-icon icon="fa-solid fa-users" />
            </label>
        </div>
        <div className="flex flex-col h-full"> <!-- Content -->
            <div className="grow p-1 py-2">
                <ChatMessage v-for="message in this.$store.getters['Channel/GetChannelMsgs']" :message="message" :key="message.id"/>
            </div>
            <div className="flex h-16 items-center justify-between px-3 w-full bg-base-100 px-4">
                <input type="text" placeholder="Type here" className="input w-full bg-base-300"/>
            </div>
        </div>

    </div> 
</div>
</template>