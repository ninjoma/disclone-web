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
    <div className="drawer-content flex flex-col">
        <div className="w-full navbar bg-base-200 border-b-2 border-zinc-700">
            <div className="flex-none lg:hidden">
                <label htmlFor="serverbar-toggle" className="btn btn-square btn-ghost text-xl">
                    <font-awesome-icon icon="fa-solid fa-bars"/>
                </label>
            </div> 
        <div className="flex-1 px-2 mx-2">
            Random Channel Name</div>
            <div className="flex-none hidden lg:block">
            </div>
            <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary lg:hidden">User List</label>
        </div>
        <div className="p-1 py-2"> <!-- Content -->
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
    </div> 
</div>
</template>