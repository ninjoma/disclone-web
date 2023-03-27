<script lang="ts">
import { SignalRService } from '@dreamonkey/vue-signalr';
import { defineComponent, inject } from 'vue';

export default defineComponent({
    data(){
        return {
            incomingLogs: [],
            eventName: "",
            subscribedEvents: []
        }
    },
    setup(){
        const hub: SignalRService = inject('$hub')!;
        return {
            hub
        }
    },
    methods: {
        addEvent() {
            if(!this.subscribedEvents.includes(this.eventName)){
                this.subscribedEvents.push(this.eventName);
                var parent = this;
                this.hub.on(this.eventName, function(message: String){
                    parent.incomingLogs.push(parent.eventName +  " : " + message);
                });
            }
        }
    }
})
</script>

<template>
    <div class="p-5">
        <h3 className="text-xl">WebSocket Debug View</h3>
        <h5>
            Incoming Log Messages:
        </h5>
        <div className="bg-base-300 h-72 overflow-y-scroll font-mono my-2">
            <span v-for="log in incomingLogs" className="block">{ log }</span>
        </div>
        <h5>
            Subscribe to Event Name: 
        </h5>
        <div className="flex gap-3 border-none my-2">
            <input type="text" placeholder="Type here" className="input w-full max-w-xs bg-base-300" v-model="eventName" />
            <button class="btn" v-on:click="addEvent()">Submit</button>
        </div>
        <h5>
            Subscribed Events:
        </h5>
        <div className="bg-base-300 h-72 overflow-y-scroll font-mono my-2">
            <span v-for="event in subscribedEvents" className="block">{{ event }}</span>
        </div>
    </div>
</template>