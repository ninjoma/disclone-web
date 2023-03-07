<script lang="ts">
import { defineComponent } from 'vue';
import TextInput from './TextInput.vue';
import LanguageSelector from './LanguageSelector.vue';

export default defineComponent({
    components: {
        TextInput,
        LanguageSelector
    }
})
</script>
<template>
    <div class="w-full p-6 bg-white rounded-lg shadow-lg">
        <div>
            <img src="./../assets/disclone.png">
        </div>
        <TextInput class="w-full"
            :leftLabel="$t('USERNAME')"
            :rightLabel="$t('LOGIN.USERNAMERECOVER')"
            />
        <TextInput class="w-full"
            inputType="password"
            :leftLabel="$t('PASSWORD')"
            :rightLabel="$t('LOGIN.RECOVERPASSWORD')"
            />
        <div class="flex mt-5 w-full gap-3">
            <div class="w-full">
                <button className="btn w-full no-animation">{{$t('LOGIN.LOGIN')}}</button>
            </div>
            <div class="w-full">
                <button className="btn w-full no-animation">{{$t('LOGIN.SIGNUP')}}</button>
            </div>
        </div>
        <LanguageSelector cssClass="select-sm mt-5 w-full"/>
    </div>
</template>