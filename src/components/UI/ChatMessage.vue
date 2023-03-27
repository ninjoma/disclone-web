<script lang="ts">
export default {
    data() {
        return {
            formattedDate: "123"
        }
    },
    props: ['message'],
    created() {
        var date = new Date(this.message.creationDate);
        this.formattedDate = ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2) + " " + date.getDate() + '/' + date.getMonth() + "/" + date.getFullYear(); 
        console.log(this.formattedDate);
    }
}
</script>
<template>
    <div className="chat chat-start">
        <div className="chat-header">
            {{ message.userId }}
            <time className="text-xs opacity-50">{{ formattedDate }}</time>
        </div>
        <div className="chat-bubble">{{ message.content }}</div>
    </div>
</template>
<style></style>