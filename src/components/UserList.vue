<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    components: {

    }
})
</script>
<template>
<div className="drawer drawer-end drawer-mobile">
  <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
  <div className="drawer-content">
    <slot />
  </div> 
  <div className="drawer-side">
    <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
    <ul className="menu w-80 bg-base-100 text-base-content">
        <div className="flex flex-col grow bg-base-200">
            <div className="h-16 border-b-2 p-2 flex items-center border-zinc-700">
            </div>
            <div className="flex flex-col p-3 gap-2 grow">
                <div className="flex flex-col p-2 gap-3">
                    <div class="flex items-center gap-3">
                        <div className="h-10 w-10 bg-white rounded-full">

                        </div>
                        <div className="">
                            Ninjam
                        </div>
                    </div>
                    <div class="flex items-center gap-3">
                        <div className="h-10 w-10 bg-white rounded-full">

                        </div>
                        <div className="">
                            Toskan4211
                        </div>
                    </div>
                    <div class="flex items-center gap-3">
                        <div className="h-10 w-10 bg-white rounded-full">

                        </div>
                        <div className="">
                            Tearing
                        </div>
                    </div>
                    <div class="flex items-center gap-3">
                        <div className="h-10 w-10 bg-white rounded-full">

                        </div>
                        <div className="">
                            Test User
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </ul>
  </div>
</div>
</template>