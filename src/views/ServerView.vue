<script lang="ts">
import { defineComponent } from 'vue';
import ServerBar from '../components/ServerBar/ServerBar.vue';
import Navbar from "../components/Navbar.vue";
import UserList from '../components/UserList.vue';

export default defineComponent({
    components: {
    ServerBar,
    Navbar,
    UserList
}
})
</script>

<template>
    <ServerBar>
        <UserList>
            <Navbar/>
        </UserList>
    </ServerBar>
</template>