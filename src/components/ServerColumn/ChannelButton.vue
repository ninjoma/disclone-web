<template>
    <button class="channel">
        <i class="bi bi-quote icon-big"></i> A random Channel
    </button>
</template>

<style scoped>
.channel {
    width:100%;
    font-family: 'Open Sans';
    text-align: left;
    border: 0;
    background-color: #4f4d8c;
    border-radius: 5px;
    height:32px;
    color:white;
    margin-top:5px;
    margin-bottom:5px;
    display:flex;
    align-items: center;
}

.channel > i {
    padding-right:5px;
}

.channel:hover {
    background-color: #5F5DA6;
}

</style>