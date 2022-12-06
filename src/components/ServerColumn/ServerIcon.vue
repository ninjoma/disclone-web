<script lang="ts">
export default {
    props: ['name', 'id'],
    data() {
        return {
            active: false
        }
    }
}
</script>

<template>
    <div class="server-icon" v-on:mouseenter="active = true" v-on:mouseleave="active = false">
        {{ name.substring(0,2) }}
        <div v-if="active" class="annotation">
        {{ name }}
        </div>
    </div>
</template>

<style scoped>
.server-icon {
    min-width:60px;
    max-width:60px;
    min-height:60px;
    max-height:60px;
    background-color: white;
    border-radius: 50%;
    display:flex;
    align-items: center;
    justify-content: center;
    font-family: 'Uni Sans';
    font-size: 20px;
    transition: 0.25s border-radius;
}

.server-icon:hover{
    border-radius: 30%;
}

.annotation {
    position:fixed;
    background-color: black;
    left: 75px;
    z-index:9999;
    opacity: 1;
    color:white;
    padding:2px;
    padding-left:10px;
    padding-right:10px;
    border-radius: 5px;
    font-family: 'Open Sans';
    font-size: 14px;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;
    animation-name: showAnim;
    animation-duration: 0.25s;
}

@keyframes showAnim {
    from { opacity: 0; }
    to { opacity: 1; }
}


</style>