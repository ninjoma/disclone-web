<script lang="ts">
export default {
    data() {
        return {
            formattedDate: ""
        }
    },
    props: ['message'],
    created() {
        var date = new Date(this.message.creationDate);
        this.formattedDate = ("0" + date.getHours()).slice(-2) + ":" + ("0" + date.getMinutes()).slice(-2) + " " + date.getDate() + '/' + date.getMonth() + "/" + date.getFullYear(); 
    },
    methods: {
        deleteChannel(){
            
        }
    }
}
</script>
<template>
    <div :class="'relative chat ' + (message.userId == this.$store.getters['User/GetUserId'] ? 'chat-start' : 'chat-end')">
        <div className="chat-header">
            {{ message.user.username }}
            <time className="text-xs opacity-50">{{ formattedDate }}</time>
            <font-awesome-icon class='px-2' icon="fa-solid fa-trash-can" style='color:red' />
        </div>
        <div className="chat-bubble">{{ message.content }}</div>
    </div>
</template>
<style></style>