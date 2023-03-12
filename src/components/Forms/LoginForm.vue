<script>
import { defineComponent } from 'vue';
import TextInput from '../Inputs/TextInput.vue';
import LanguageSelector from '../Inputs/LanguageSelector.vue';

export default defineComponent({
    components: {
        TextInput,
        LanguageSelector
    },
    data() {
        return {
            username: '',
            password: '',
            email: '',
            isLogin: true,
        }
    },
    methods: {
        Login() {
            this.$isLoading = true;
            if (this.isLogin) {
                if (this.username.trim() != '' && this.password.trim() != '') {
                    this.$store.dispatch('User/login', { username: this.username, password: this.password }).then(() => {
                        setTimeout(() => {
                            if (this.$store.getters['User/GetUserToken'] != null) {
                                this.$router.push('/server');
                            }
                        }, 500);
                    })
                }
            } else {
                this.isLogin = true;
            }
        },
        Register() {
            if (!this.isLogin) {
                this.$store.dispatch('User/register', { username: this.username, password: this.password, email: this.email }).then(() => {
                    if (this.$store.getters['User/GetUserToken'] != null) {
                        this.$router.push('/server');
                    }
                })
            } else {
                this.isLogin = false;
            }
        }
    }
})
</script>
<template>
    <div class="w-full p-6 bg-white rounded-lg shadow-lg">
        <div>
            <img src="./../../assets/disclone.png">
        </div>

        <TextInput class="w-full" :leftLabel="$t('USERNAME')" :rightLabel="this.isLogin ? $t('LOGIN.USERNAMERECOVER') : ''"
            v-model:modelValue="this.username" />

        <TextInput class="w-full" inputType="password" :leftLabel="$t('PASSWORD')"
            :rightLabel="this.isLogin ? $t('LOGIN.RECOVERPASSWORD') : ''" v-model:modelValue="this.password" />

        <TextInput class="w-full" :leftLabel="$t('EMAIL')" v-model:modelValue="this.email" v-if="!this.isLogin" />

        <div class="flex mt-5 w-full gap-3">
            <!-- Iniciar Sesion -->
            <div class="w-full">
                <button class="btn w-full no-animation" v-bind:class="this.isLogin ? '' : 'btn-ghost'" @click="Login()">{{
                    $t('LOGIN.LOGIN') }}</button>
            </div>
            <!-- Registrar -->
            <div class="w-full">
                <button class="btn w-full no-animation" v-bind:class="this.isLogin ? 'btn-ghost' : ''"
                    @click="Register()">{{ $t('LOGIN.SIGNUP') }}</button>
            </div>

        </div>
        <LanguageSelector cssClass="select-sm mt-5 w-full" />
    </div>
</template>