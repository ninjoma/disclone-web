<template>
    <button className="btn btn-outline" @click="createChannel()">{{$t('SERVER.NEWCHANNEL')}}</button>
</template>
<script lang="ts">
export default {
    methods: {
        createChannel(){
            console.log("Hola que tal!");
        }
    }
}
</script>