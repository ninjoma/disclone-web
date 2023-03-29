<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    data(){
        return {
            filter: ""
        }
    },
    components: {
    },
    methods: {
        filterMessages(){
            this.$store.dispatch('Channel/FilterMessages', { channelid: this.$store.getters['Channel/GetCurrentChannel'].id, contentFilter: this.filter});
        }
    }
})
</script>
<template>
    <div className="form-control">
        <label className="input-group">
            <input type="text" :placeholder="$t('SEARCH.PLACEHOLDER')" v-model="filter" className="input input-sm w-full max-w-xs" />
            <button class="btn btn-sm" v-on:click="() => {filterMessages()}"><font-awesome-icon icon="fa-solid fa-search" /></button>
        </label>
    </div>
    <label htmlFor="my-drawer-4" className="drawer-button btn btn-square btn-ghost text-xl lg:hidden">
        <font-awesome-icon icon="fa-solid fa-users" />
    </label>
</template>