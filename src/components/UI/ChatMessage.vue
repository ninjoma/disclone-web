<script lang="ts">
export default {
    data() {
        return {
            formattedDate: "123"
        }
    },
    props: ['message'],
    created() {
        console.log(this.$store.getters['User/GetUserId']);
        var date = new Date(this.message.creationDate);
        this.formattedDate = ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2) + " " + date.getDate() + '/' + date.getMonth() + "/" + date.getFullYear(); 
    }
}
</script>
<template>
    <div :class="'chat ' + (message.userId == this.$store.getters['User/GetUserId'] ? 'chat-start' : 'chat-end')">
        <div className="chat-header">
            {{ message.user.username }}
            <time className="text-xs opacity-50">{{ formattedDate }}</time>
        </div>
        <div className="chat-bubble">{{ message.content }}</div>
    </div>
</template>
<style></style>