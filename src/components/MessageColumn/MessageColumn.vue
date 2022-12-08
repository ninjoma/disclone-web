<script lang="ts">
import Message from "./Message.vue";

export default {
    components: {
        Message
    }
}
</script>

<template>
    <div class="messages-col">
        <div class="message-col-body">
        </div>
        <div class="message-col-input">
            <span><input class="message-input" placeholder="Enter a message..."></span>
        </div>
    </div>
</template>

<style scoped>

.messages-col {
    height:100%;
    display:flex;
    flex-direction: column;
    width:100%;
    justify-content: space-between;
}


.message-col-body {
    width:100%;
    padding-left:20px;
    padding-right:20px;
    overflow-y: auto;
    margin-top:auto;
    bottom: 0;
}


.message-col-body::-webkit-scrollbar-track
{
	background-color: #5F5DA6;
}

.message-col-body::-webkit-scrollbar
{
	width: 10px;
	background-color: #262626;
}

.message-col-body::-webkit-scrollbar-thumb
{
	background-color: #262626;
}

.message-col-input {
    width:100%;
    height:64px;
    display:flex;
    align-items: center;
    bottom:0;
}

.message-col-input > span {
    width:100%;
    display:block;
    overflow:hidden;
    padding: 10px;
    padding-left:16px;
    padding-right:16px;
}

.message-input{
    width:100%;
    height: 38px;
    border-radius: 5px;
    border: 0px;
    background-color: #4f4d8c;
    font-family: 'Open Sans';
    color:white;
    padding: 10px;
}
.message-input:focus{
    outline: none;
}

.message-input:focus::placeholder {
  color: transparent;
}

</style>