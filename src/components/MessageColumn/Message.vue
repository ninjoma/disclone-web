<script lang="ts">
export default {
  props: ['date', 'user', 'text']
}
</script>

<template>
    <div class="container">
        <span class="date">{{ date }}</span>
        <span class="user">{{ user }}</span>
        <span class="text">{{ text }}</span>
    </div>
</template>

<style scoped>
.container{
    width:100%;
    padding-left:10px;
    padding-right:10px;
    font-family: 'Open Sans';
}

.date {
    font-size: 10px;
    color:lightgray;
    padding-right:3px;
}
.user {
    color:yellow;
    padding-right:5px;
}
.text {
    color:white;
}
</style>