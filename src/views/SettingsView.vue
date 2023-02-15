<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    components: {
        
    }
})
</script>

<template>
    <div className="w-full">
        <div className="flex items-center rounded-sm justify-center scrollbar-hide pt-10">
            <div className="max-w-3xl w-full">
                <div className="flex items-center bg-base-300 rounded-lg px-10 shadow-lg text-3xl">
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" />
                    <input type="text" placeholder="Search Settings..." className="input w-full text-3xl p-10 bg-base-300" style="outline-width: 0 !important;" />
                </div>
                <div className="pt-5">
                    <div className="flex flex-col w-full px-5 py-5 bg-base-300 rounded-lg">
                        <div className="flex items-center py-3 px-2 gap-5 text-2xl">
                            <font-awesome-icon icon="fa-solid fa-video" />
                            <h2 className="text-2xl font-bold">Video y Audio</h2>
                        </div>
                        <div className="px-3 py-2 rounded-lg bg-base-100">
                            <div className="py-2 flex gap-3 items-center w-full justify-between">
                                <div className="text-xl px-1">
                                    <font-awesome-icon icon="fa-solid fa-microphone" />
                                    <span className="pl-5 text-xl">Audio</span>
                                </div>
                                <select className="select select-bordered w-full max-w-xs">
                                    <option selected>Predeterminado (Micrófono de entrada)</option>
                                    <option>Línea de entrada</option>
                                    <option>Mezcla de estéreo</option>
                                </select>
                            </div>
                            <div className="flex">
                                <div className="w-full px-0.5">
                                    <input type="range" min="0" max="100" value="40" className="range" />
                                    <div className="flex">
                                        <div className="flex justify-between text-xs w-full">
                                            <span>0%</span>
                                            <span>50%</span>
                                            <span>100%</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="rounded-lg bg-base-200">
                                    
                                </div>
                            </div>
                        </div>
                        <div className="py-2 flex gap-3 items-center w-full justify-between">
                            <div className="text-xl">
                                <font-awesome-icon icon="fa-solid fa-video" />
                                <span className="pl-5 text-xl">Vídeo</span>
                            </div>
                            <select className="select select-bordered w-full max-w-xs">
                                <option selected>Predeterminado (Salida de vídeo)</option>
                                <option>Webcam de Ubisoft</option>
                                <option>Webcam del Colacao</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>