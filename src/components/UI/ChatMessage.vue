<template>
    <div className="chat chat-start">
        <div className="chat-header">
            {{ this.message.Username }}
            <time className="text-xs opacity-50">{{ this.message.creationDate }}</time>
        </div>
        <div className="chat-bubble">{{ this.message.content }}</div>
    </div>
</template>
<script lang="ts">
export default {
    prop:{
        message: null,
    }
}
</script>
<style></style>