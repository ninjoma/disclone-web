<script lang="ts">
import { defineComponent } from 'vue';
import ServerBar from '../components/ServerBar/ServerBar.vue';
import Navbar from "../components/UI/Navbar.vue";
import UserList from '../components/UI/UserList.vue';
import Home from '../components/Pages/Home.vue';
import CreateServerModal from '../components/modals/CreateServerModal.vue';
import CreateChannelModal from '../components/modals/CreateChannelModal.vue';
export default defineComponent({
    components: {
        ServerBar,
        Navbar,
        UserList,
        Home,
        CreateServerModal,
        CreateChannelModal
    },
    mounted(){
        if (window.localStorage.getItem("userToken") == null){
            this.$router.push('/login');
        }
    }
})
</script>

<template>
    <ServerBar>
        <UserList v-if="Object.keys(this.$store.getters['Server/GetCurrentServer']).length > 0">
            <Navbar />
        </UserList>
        <Home v-if="Object.keys(this.$store.getters['Server/GetCurrentServer']).length === 0">

        </Home>
    </ServerBar>
    <CreateServerModal/>
    <CreateChannelModal/>
</template>