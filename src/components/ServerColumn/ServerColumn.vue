<script setup lang="ts">
import ServerList from "./ServerList.vue";
import ChannelButton from "./ChannelButton.vue";
import UserControls from "./UserControls.vue";
</script>

<template>
    <div class="server-col">
        <ServerList/>
        <div class="server-contents-col">
            <div class="server-header">
                Server Name
            </div>
            <div class="server-channels">
                <ChannelButton/>
                <ChannelButton/>
                <ChannelButton/>
                <ChannelButton/>
            </div>
        </div>
        <UserControls/>
    </div>
</template>

<style scoped>
.server-col {
    display:flex;
    background-color:#4f4d8c;
    min-height:100vh;
    min-width:300px;
    flex:1;
}

.server-contents-col {
    height:100%;
    width:100%; 
    display:flex; 
    flex-direction: column;
}

.server-channels {
    padding:10px;
    overflow:hidden;
    overflow-y:scroll;
    scrollbar-width: none;
    flex:1;
}

.server-channels::-webkit-scrollbar {
    display:none;
}

.server-header {
    position:sticky;
    height:50px;
    width:100%;
    display:flex;
    align-items: center;
    padding:10px;
    padding-left:16px;
    padding-right:16px;
    border-bottom: 2px solid rgba(0,0,0,0.2);
    font-family: 'Open Sans';
    font-weight:bolder;
    color:white;
}

</style>