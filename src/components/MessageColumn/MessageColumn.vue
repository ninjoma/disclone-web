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
    flex:4;
    height:100%;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
}

.message-col-body {
    width:100%;
    flex:1;
}
.message-col-input {
    width:100%;
    height:64px;
}

.message-col-input > span {
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