<template>
    <input type="checkbox" id="DeleteServerModal" class="modal-toggle" />
    <label for="DeleteServerModal" class="modal cursor-pointer">
        <label class="modal-box relative w-full" for="">
            <div class="flex justify-center gap-2">
                <button class="btn btn-outline btn-info" v-on:click="Cancel()">
                    {{ this.$t("CANCEL") }}
                </button>
                <button class="btn btn-outline btn-error" v-on:click="Delete()">
                    {{ this.$t("SERVER.DELETESERVER") }}
                </button>
            </div>
        </label>
    </label>
</template>
<script lang="ts">
import { Api } from '../../Gateway/Api.js'

export default {

    methods: {
        Cancel() {
            const modal = document.getElementById("DeleteServerModal") as HTMLInputElement;
            modal.checked = false;
        },
        Delete() {
            Api({
                method: "delete",
                url: '/servers/' + this.$store.getters['Server/GetCurrentServer'].id,
            }).then(function (response) {
                this.$store.dispatch('Server/clearCurrentServer');
                this.$store.dispatch('Server/fetchServers');
            }.bind(this))
            const modal = document.getElementById("DeleteServerModal") as HTMLInputElement;
            modal.checked = false;
        },
    }
}
</script>