<script lang="ts">
import { defineComponent } from 'vue';
import TextInput from './TextInput.vue';

export default defineComponent({
    components: {
        TextInput
    }
})
</script>
<template>
    <div class="w-full p-6 bg-white rounded-lg shadow-lg">
        {{ $store.state }}
        <div>
            <img src="./../assets/disclone.png">
        </div>
        <TextInput class="w-full" 
            leftLabel="Nombre de usuario"
            rightLabel="Recuperar Usuario"
            />
        <TextInput class="w-full" 
            inputType="password"
            leftLabel="Contraseña" 
            rightLabel="¿Has olvidado tu contraseña?"
            />
        <div class="flex mt-5 w-full gap-3">
            <div class="w-full">
                <button className="btn w-full no-animation">Iniciar Sesión</button>
            </div>
            <div class="w-full">
                <button className="btn w-full no-animation">Registrar</button>
            </div>
        </div>
    </div>
</template>