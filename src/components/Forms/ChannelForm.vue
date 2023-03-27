<template>
    <div class="w-full flex flex-col justify-center">
        <TextInput class="w-full" :leftLabel="$t('SERVER.SERVERNAME')" v-model:modelValue="this.ServerName" />
        <button className="btn btn-outline my-3 " @click="createChannel()">{{ $t('SERVER.ADDSERVER') }}</button>
    </div>
</template>
<script lang="ts">
import TextInput from '../Inputs/TextInput.vue';

export default {
    components: {
        TextInput
    },
    methods: {
        createChannel(){
            
        }
    }
}
</script>