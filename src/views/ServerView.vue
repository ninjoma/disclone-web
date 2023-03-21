<script lang="ts">
import { defineComponent } from 'vue';
import ServerBar from '../components/ServerBar/ServerBar.vue';
import Navbar from "../components/UI/Navbar.vue";
import UserList from '../components/UI/UserList.vue';
import Home from '../components/UI/Home.vue';
export default defineComponent({
    components: {
    ServerBar,
    Navbar,
    UserList,
    Home
}
})
</script>

<template>
    <ServerBar>
        <UserList v-if="Object.keys(this.$store.getters['Server/GetCurrentServer']).length > 0">
            <Navbar/>
        </UserList>
        <Home v-if="Object.keys(this.$store.getters['Server/GetCurrentServer']).length === 0">
            
        </Home>
    </ServerBar>
</template>