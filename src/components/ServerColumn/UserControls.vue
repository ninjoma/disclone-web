<script type="ts">
    export default {
        props: ['username']
    }
</script>

<template>
    <div class="user-controls">
        <span id="username">{{ username }}</span>
        <div class="controls">
            <i class="bi bi-mic-fill"></i>
            <i class="bi bi-headphones" style="font-size: 24px;"></i>
            <a href="/settings"><i class="bi bi-gear-fill"></i></a>
        </div>
    </div>
</template>

<style scoped>
.user-controls {
    width:100%;
    height:64px;
    background-color: #262626;
    color:white;
    padding-left:20px;
    padding-right:20px;
    display: flex;
    align-items: center;
    justify-content:space-between;
}

.controls {
    display:flex;
    align-items: center;
    gap: 10px;
}

a {
    color: inherit;
    text-decoration: inherit;
}

</style>