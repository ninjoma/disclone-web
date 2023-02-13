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
            <div className="flex-1 px-2 mx-2 w-full">
                Server Name
            </div>
        </div>
        <div className="flex flex-col p-3 gap-2 grow">
            <button className="btn text-sm">Voice Channel #1</button>
            <button className="btn btn-block">Voice Channel #2</button>
            <button className="btn btn-block">Voice Channel #3</button>
        </div>
        <div className="flex h-16 bg-neutral-focus items-center justify-between px-3">
            <span>Username</span>
            <div>
                <font-awesome-icon icon="fa-solid fa-gear" />
            </div>
        </div>
    </div>
    
</template>