<script>
import { defineComponent } from 'vue';
import ServerBar from '../components/ServerBar/ServerBar.vue';
import Navbar from "../components/Navbar.vue";
import UserList from '../components/UserList.vue';
import LanguageSelector from '../components/Inputs/LanguageSelector.vue'
import GoBackButton from '../components/Inputs/GoBackButton.vue'
export default defineComponent({
    components: {
        LanguageSelector,
        GoBackButton
    }
})
</script>

<template>
    <div class="flex flex-col justify-center w-full items-center my-6">
        <div class="card w-3/5 bg-base-300 shadow-xl">
            <div class="card-body">
                <h1 class="card-title">{{$t('SETTINGS.APPCONFIG.APPCONFIG')}}</h1>
                <hr class="text-base-300 my-3">
                <LanguageSelector cssClass="select-bordered"></LanguageSelector>
            </div>
        </div>
        <div class="flex flex-row justify-center w-full my-6">
            <GoBackButton route="/server" cssClass="btn-error" :text="$t('SETTINGS.APPCONFIG.BACKBUTTON')"/>
        </div>
    </div>
</template>