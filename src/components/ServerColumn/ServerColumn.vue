<script lang="ts">
import ServerList from "./ServerList.vue";
import ChannelButton from "./ChannelButton.vue";
import UserControls from "./UserControls.vue";

export default {
    components: {
        ChannelButton,
        UserControls,
        ServerList
    }
}
</script>

<template>
    <div class="server-col">
        <ServerList/>
        <div class="server-contents-col">
            <div class="server-header">
                <span id="servername">Server Name</span>
                <i class="bi bi-chevron-down"></i>
            </div>
            <div class="server-channels">
                <!-- Fill with Channels -->
            </div>
            <UserControls/>
        </div>
    </div>
</template>

<style scoped>
.server-col {
    display:flex;
    background-color:#4f4d8c;
    min-height:100vh;
    min-width:300px;
    flex:0.9;
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
    justify-content: space-between;
    padding:10px;
    padding-left:20px;
    padding-right:20px;
    border-bottom: 2px solid rgba(0,0,0,0.2);
    font-family: 'Open Sans';
    font-weight:bolder;
    color:white;
}

</style>