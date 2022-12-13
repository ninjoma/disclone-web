<script lang="ts">
import Message from "./Message.vue";
import type { VueCookies } from "vue-cookies";
import { inject } from "vue";

export default {
  data() {
    const cookies = inject<VueCookies>("$cookies");
    let messages: any[] = [];
    let messageInput = "";
    return {
      cookies,
      messageInput,
      messages,
    };
  },
  created() {
    this.$watch(
      () => this.$route.params,
      () => {
        this.fetchInfo();
      }
    );
  },
    mounted() {
        this.fetchInfo();
    },
    methods: {
    sendMessage: async function(){
        var channelid = this.$route.query.channel;
        if(channelid == null && this.messageInput.length > 0){
            return;
        }
        let res = await fetch(import.meta.env.VITE_API_URL + "Message/sendMessage", {
            method: "POST",
            headers: new Headers({
                'Accept': "*/*",
                "Content-Type": "application/json",
                'Authorization': "Bearer " + this.cookies?.get("jwt")
            }),
            body: JSON.stringify({
                channelId: channelid,
                content: this.messageInput
            })
        })
        this.messageInput = "";
        this.fetchInfo();
    },
    fetchInfo: async function(){
        var channelid: any = this.$route.query.channel;
        let res = await fetch(import.meta.env.VITE_API_URL + "Message/getMessagesFromChannel/" + channelid, {
            method: "GET",
            headers: new Headers({
                'Accept': "*/*",
                "Content-Type": "application/json",
                'Authorization': "Bearer " + this.cookies?.get("jwt")
            })
        })
        res.json().then((result: Array<any>) => {
            if(this.$route.query.messageQuery){
                result = result.filter((entry) => entry.content.toLowerCase().includes(this.$route.query.messageQuery) || entry.user.userName.toLowerCase().includes(this.$route.query.messageQuery));
            }
            this.messages = [];
            result.forEach(entry => {
                var messageDate = new Date(entry.creationDate)
                var messageDateString = messageDate.getHours() + ":" + messageDate.getMinutes();
                this.messages.push({date: messageDateString, user: entry.user.userName, text: entry.content, id: entry.id})
            });
        })
    }
  },
  components: {
    Message,
  },
};
</script>

<template>
  <div class="messages-col">
    <div class="message-col-body">
      <Message
        v-for="message in messages"
        :date="message.date"
        :user="message.user"
        :text="message.text"
        :id="message.id"
      />
    </div>
    <div class="message-col-input">
      <span
        ><input
          class="message-input"
          v-model="messageInput"
          placeholder="Enter a message..."
          v-on:keyup.enter="sendMessage"
      /></span>
    </div>
  </div>
</template>

<style scoped>
.messages-col {
  height: 100%;
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: space-between;
}

.message-col-body {
  width: 100%;
  padding-left: 20px;
  padding-right: 20px;
  overflow-y: auto;
  margin-top: auto;
  bottom: 0;
}

.message-col-body::-webkit-scrollbar-track {
  background-color: #5f5da6;
}

.message-col-body::-webkit-scrollbar {
  width: 10px;
  background-color: #262626;
}

.message-col-body::-webkit-scrollbar-thumb {
  background-color: #262626;
}

.message-col-input {
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  bottom: 0;
}

.message-col-input > span {
  width: 100%;
  display: block;
  overflow: hidden;
  padding: 10px;
  padding-left: 16px;
  padding-right: 16px;
}

.message-input {
  width: 100%;
  height: 38px;
  border-radius: 5px;
  border: 0px;
  background-color: #4f4d8c;
  font-family: "Open Sans";
  color: white;
  padding: 10px;
}
.message-input:focus {
  outline: none;
}

.message-input:focus::placeholder {
  color: transparent;
}
</style>
