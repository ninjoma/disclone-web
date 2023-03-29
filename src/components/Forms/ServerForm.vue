<template>
    <div class="w-full flex flex-col justify-center">
        <TextInput class="w-full" :leftLabel="$t('SERVER.SERVERNAME')" v-model:modelValue="this.ServerName" />
        <button className="btn btn-outline my-3 " @click="createServer()">{{ $t('SERVER.ADDSERVER') }}</button>
    </div>
</template>
<script lang="ts">
import TextInput from '../Inputs/TextInput.vue';
import { Api } from "../../Gateway/Api.js";
import { mapGetters } from 'vuex';
export default {
    components: {
        TextInput
    },
    data() {
        return {
            ServerName: ""
        }
    },
    computed: {
        ...mapGetters({
            getUserId: "User/GetUserId",
        })
    },
    methods: {
        createServer() {
            if (this.ServerName.trim() != ''){
                Api({
                    method: 'post',
                    url: '/servers/me',
                    data: {
                        ownerId: this.getUserId,
                        name: this.ServerName,
                    }
                }).then(function (response) {
                    this.$emit('ServerCreated');
                }.bind(this))
            }
        }
    }
}
</script>