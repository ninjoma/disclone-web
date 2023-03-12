<script lang="ts">
import { defineComponent } from 'vue';
import ServerList from "../ServerBar/ServerList.vue";
import ServerDetails from "../ServerBar/ServerDetails.vue";

export default defineComponent({
    components: {
        ServerList,
        ServerDetails
    }
})
</script>
<template>
    <div className="drawer drawer-mobile">
        <input id="serverbar-toggle" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
            <slot />
        </div> 
        <div className="drawer-side">
            <label htmlFor="serverbar-toggle" className="drawer-overlay"></label> 
            <div className="menu w-80 bg-base-200 text-base-content scrollbar-hide border-r-2 border-zinc-700">
                <div className="flex">
                    <ServerList/>
                    <ServerDetails/>
                </div>
            </div>
        </div>
    </div>
</template>