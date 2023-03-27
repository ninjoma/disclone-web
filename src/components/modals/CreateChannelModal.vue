<template>
    <input type="checkbox" id="CreateChannelModal" class="modal-toggle" />
    <label for="CreateChannelModal" class="modal cursor-pointer">
        <label class="modal-box relative w-full" for="">
            <ChannelForm @ChannelCreated="this.CloseModal()"/>
        </label>
    </label>
</template>
<script lang="ts">
import { mapGetters } from 'vuex';
import ChannelForm from '../Forms/ChannelForm.vue';

export default {
    components: {
        ChannelForm
    },
    computed: {
        ...mapGetters({
            getServer: "Server/GetCurrentServer"
        })
    },
    methods: {
        CloseModal(){
            const modal = document.getElementById("CreateChannelModal") as HTMLInputElement;
            modal.checked = false;
            this.$store.dispatch('Channel/FetchChannels', this.getServer.id);
        }
    }
}
</script>