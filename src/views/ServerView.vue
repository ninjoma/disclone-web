<script lang="ts">
import ServerColumn from "../components/ServerColumn/ServerColumn.vue";
import MessageColumn from "../components/MessageColumn/MessageColumn.vue";
import UsersColumn from "../components/UserColumn/UsersColumn.vue";
import SearchInput from "../components/inputs/SearchInput.vue";

export default {
    components: {
        UsersColumn,
        ServerColumn,
        MessageColumn,
        SearchInput
    }
}

</script>

<template>
    <div class="fill-height">
        <div class="view-columns">
            <ServerColumn/>
            <div class="message-container">
                <div class="message-col-header">
                    <div>
                        <i class="bi bi-quote icon-big"></i> <span id="currentchannelname">Current Channel Name</span>
                    </div>
                    <SearchInput/>
                </div>
                <div class="message-column">
                    <MessageColumn/>
                    <UsersColumn/>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
.fill-height {
    background-color: #5F5DA6;
    min-height:auto;
}
.view-columns{
    display:flex;
}

.message-column {
    display:flex; 
    flex:1;
    max-height:100vh;
    overflow:hidden;
}

.message-container{
    height:100vh;
    display:flex;
    flex-direction: column;
    width:100%;
}

.message-col-header{
    background-color: #5F5DA6;
    height: 50px;
    position:sticky;
    height:50px;
    width:100%;
    display:flex;
    justify-content:space-between;
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