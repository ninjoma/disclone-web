<template>
    <button @click="$router.push(route)" :class="'btn ' + cssClass">{{ $t(text) }}</button>
</template>
<script>
export default {
    props: {
        route: {
            type: String,
            default: '',
            required: true
        },
        cssClass: {
            type: String,
            default: '',
            required: false,
        },
        text: {
            type: String,
            default: '',
            required: false,
        }

    }
}
</script>
<style>
    
</style>