<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    components: {

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
            Random Channel Name</div>
            <div className="flex-none hidden lg:block">
            </div>
            <label htmlFor="my-drawer-4" className="drawer-button btn btn-square btn-ghost text-xl lg:hidden">
                <font-awesome-icon icon="fa-solid fa-users" />
            </label>
        </div>
        <div className="flex flex-col h-full"> <!-- Content -->
            <div className="grow p-1 py-2">
                <div className="chat chat-start">
                    <div className="chat-header">
                        Username
                        <time className="text-xs opacity-50">12:45</time>
                    </div>
                    <div className="chat-bubble">Random Message</div>
                </div>
                <div className="chat chat-end">
                    <div className="chat-header">
                        Another Username
                        <time className="text-xs opacity-50">12:45</time>
                    </div>
                    <div className="chat-bubble">This is a prototype</div>
                </div>
                <div className="chat chat-end">
                    <div className="chat-bubble">Lorem Ipsum</div>
                </div>
                <div className="chat chat-start">
                    <div className="chat-header">
                        Username
                        <time className="text-xs opacity-50">12:45</time>
                    </div>
                    <div className="chat-bubble">WOW! 🤣</div>
                </div>
            </div>
            <div className="flex h-16 bg-neutral-focus items-center justify-between px-3 w-full">
                <input type="text" placeholder="Type here" className="input w-full" />
            </div>
        </div>

    </div> 
</div>
</template>