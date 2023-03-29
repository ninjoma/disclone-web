<script lang="ts">
import { defineComponent } from 'vue';
import SearchInput from '../Inputs/SearchInput.vue';
import ChatMessage from './ChatMessage.vue';
import MessageInput from './MessageInput.vue';

export default defineComponent({
    components: {
        ChatMessage,
        MessageInput,
        SearchInput
    },
})
</script>
<template>
<div className="drawer">
    <input id="serverbar-toggle" type="checkbox" className="drawer-toggle" />
    <div className="drawer-content flex flex-col h-screen overflow-hidden" style="transition-property: none; !important; transition-duration: 0ms !important;">
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
            <SearchInput></SearchInput>
        </div>
        <div className="flex flex-col overflow-y-scroll relative h-full CustomScroll pt-4"> <!-- Content -->
            <div className="">
                <ChatMessage v-for="message in this.$store.getters['Channel/GetChannelMsgs']" :message="message" :key="message.id"/>
            </div>
        </div>
        <MessageInput/>
    </div> 
</div>
</template>