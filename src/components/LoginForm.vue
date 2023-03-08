<script>
import { defineComponent } from 'vue';
import TextInput from './TextInput.vue';
import LanguageSelector from './LanguageSelector.vue';

export default defineComponent({
    components: {
        TextInput,
        LanguageSelector
    },
    data() {
        return {
            username: '',
            password: ''
        }
    },
    methods: {

        login() {
            if (this.username.trim() != '' && this.password.trim() != ''){
                this.$store.dispatch('login', {username: this.username, password: this.password});
            }
        }
    }
})
</script>
<template>
    <div class="w-full p-6 bg-white rounded-lg shadow-lg">
        <div>
            <img src="./../assets/disclone.png">
        </div>

        <TextInput class="w-full" :leftLabel="$t('USERNAME')" :rightLabel="$t('LOGIN.USERNAMERECOVER')"
            v-model:modelValue="this.username" />

        <TextInput class="w-full" inputType="password" :leftLabel="$t('PASSWORD')" :rightLabel="$t('LOGIN.RECOVERPASSWORD')"
            v-model:modelValue="this.password" />

        <div class="flex mt-5 w-full gap-3">

            <!-- Iniciar Sesion -->
            <div class="w-full">
                <button className="btn w-full no-animation" @click="login()">{{ $t('LOGIN.LOGIN') }}</button>
            </div>
            <!-- Registrar -->
            <div class="w-full">
                <button className="btn w-full no-animation">{{ $t('LOGIN.SIGNUP') }}</button>
            </div>

        </div>
        <LanguageSelector cssClass="select-sm mt-5 w-full" />
    </div>
</template>