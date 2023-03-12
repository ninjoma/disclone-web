<template>
    <div class="absolute  h-full w-full flex flex-col justify-center w-full items-center bg-base-100/50" v-if="this.isOpen">
        <progress class="progress  progress-primary w-56 h-7"></progress>
    </div>
</template>
<script>
export default {
    props:{
        isOpen: false,
    }
}
</script>