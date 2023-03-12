<script lang="ts">
import { defineComponent } from 'vue';


export default defineComponent({
    components: {
        
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
                <span className="font-bold uppercase italic">Server Name</span>
            </div>
        </div>
        <div class="grow">
            <div className="flex flex-col p-3 gap-2">
                <span>Voice Channels</span>
                <button className="btn text-sm ">Voice Channel #1</button>
                <button className="btn btn-block">Voice Channel #2</button>
                <button className="btn btn-block">Voice Channel #3</button>
            </div>
            <div className="flex flex-col p-3 gap-2">
                <span>Text Channels</span>
                <button className="btn text-sm">Text Channel #1</button>
                <button className="btn btn-block">Text Channel #2</button>
                <button className="btn btn-block">Text Channel #3</button>
            </div>
        </div>
        <div className="flex h-16 bg-base-300 items-center justify-between px-5">
            <span>Username</span>
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