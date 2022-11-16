<template>
    <div class="fill-height">
        <div class="view-columns">
            <div class="server-col">
                <div class="server-list">
                    
                </div>
                <div class="server-header">
                    Server Name
                </div>
            </div>
            <div class="header-bar-container">
                <div class="message-col-header">
                        Text Channel Name
                </div>
                <div class="message-column">
                    <div class="messages-col">
                        <div class="message-col-body">

                        </div>
                        <div class="message-col-input">
                            <span><input class="message-input" placeholder="Enter a message..."></span>
                        </div>
                    </div>
                    <div class="users-col">

                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>

.fill-height {
    background-color: #5F5DA6;
    min-height:100vh;
}
.view-columns{
    display:flex;
}
.server-col {
    display:flex;
    background-color:#4f4d8c;
    min-height:100vh;
    min-width:300px;
    flex:1;
}

.header-bar-container {
    min-height:100vh; display:flex; flex-direction:column; flex:3.8;
}

.message-column {
    display:flex; 
    flex:1;
}


.server-list {
    display:flex;
    min-height:100vh;
    width:90px;
    background-color: #262626;
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

.messages-col {
    flex:4;
    height:100%;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
}
.message-col-header{
    background-color: #4f4d8c;
    height: 50px;
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

.users-col{
    flex:1;
    min-width:256px;
    height:100%;
    background-color: #4f4d8c;
}


</style>