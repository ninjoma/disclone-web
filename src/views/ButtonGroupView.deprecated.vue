<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    components: {
        
    }
})
</script>

<template>
    <div className="w-full">
        <div className="flex items-center rounded-sm shadow-2xl bg-base-30 justify-center scrollbar-hide">
            <div className="btn-group overflow-x-auto p-2">
                <button className="btn btn-active flex gap-2">
                    <div>
                        <font-awesome-icon icon="fa-solid fa-user" />
                    </div>
                    <span>Cuenta</span>
                </button>
                <button className="btn flex gap-2">
                    <div>
                        <font-awesome-icon icon="fa-solid fa-video" />
                    </div>
                    <span>Voz y Vídeo</span>
                </button>
                <button className="btn flex gap-2">
                    <div>
                        <font-awesome-icon icon="fa-solid fa-server" />
                    </div>
                    <span>Servidor</span>
                </button>
                <button className="btn flex gap-2">
                    <div>
                        <font-awesome-icon icon="fa-solid fa-palette" />
                    </div>
                    <span>Aparencia</span>
                </button>
                <button className="btn flex gap-2">
                    <div>
                        <font-awesome-icon icon="fa-solid fa-language" />
                    </div>
                    <span>Lenguaje</span>
                </button>
            </div>
        </div>
    </div>
</template>