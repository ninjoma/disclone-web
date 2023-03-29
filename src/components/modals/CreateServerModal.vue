<template>
    <input type="checkbox" id="CreateServerModal" class="modal-toggle" />
    <label for="CreateServerModal" class="modal cursor-pointer">
        <label class="modal-box relative w-full" for="">
            <ServerForm @ServerCreated="this.CloseModal()" />
        </label>
    </label>
</template>
<script lang="ts">
import ServerForm from '../Forms/ServerForm.vue';
export default {
    components: {
        ServerForm
    },
    methods: {
        CloseModal() {
            const modal = document.getElementById("CreateServerModal") as HTMLInputElement;
            modal.checked = false;
            setTimeout(() => {
                this.$store.dispatch('Server/fetchServers');
            }, 1000);
        }
    }
}
</script>