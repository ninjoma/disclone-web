<template>
    <div class="user-controls">
        <span>Username</span>
        <div class="controls">
            <i class="bi bi-mic-fill icon-big"></i>
            <i class="bi bi-headphones icon-big" style="font-size: 24px;"></i>
            <i class="bi bi-gear-fill icon-big"></i>
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
    gap: 16px;
}

</style>