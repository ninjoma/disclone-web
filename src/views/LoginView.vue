<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

})
</script>

<template>
    <div class="mx-auto flex justify-center items-center h-screen max-w-lg">
        <div class="w-full p-6">
            <div>
                <img src="./../assets/disclone.png">
            </div>
            <label className="label">
                <span className="label-text">Nombre de usuario</span>
                <span className="label-text-alt"><a class="underline" href="#">Recuperar usuario</a></span>
            </label>
            <input type="text" placeholder="Type here" className="input input-bordered w-full" />
            <label className="label">
                <span className="label-text">Contraseña</span>
                <span className="label-text-alt"><a class="underline" href="#">¿Has olvidado tu contraseña?</a></span>
            </label>
            <input type="text" placeholder="Type here" className="input input-bordered w-full" />
            <div class="flex mt-5 w-full gap-3">
                <div class="w-full">
                    <button className="btn w-full">Iniciar Sesión</button>
                </div>
                <div class="w-full">
                    <button className="btn w-full">Registrar</button>
                </div>
            </div>
        </div>
    </div>
</template>