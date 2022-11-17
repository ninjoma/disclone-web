<script setup lang="ts">
import ServerIcon from "./ServerIcon.vue";
</script>

<template>
    <div class="server-list">
        <ServerIcon/>
        <ServerIcon/>
        <ServerIcon/>
        <ServerIcon/>
        <ServerIcon/>
        <ServerIcon/>
        <ServerIcon/>
    </div>
</template>
<style scoped>
.server-list {
    display:flex;
    min-height:100vh;
    max-height:100vh;
    width:90px;
    background-color: #262626;
    flex-direction: column;
    align-items: center;
    padding:5px;
    gap: 7px;
    overflow:hidden;
    overflow-y:scroll;
    scrollbar-width: none;
}

.server-list::-webkit-scrollbar {
    display:none;
}

</style>