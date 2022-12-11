<script lang="ts">



export default {
    methods: {
        SearchMessages: function(){
            var query: any = this.$route.params;
            query.messagequery = (this.$refs as any).search.value;
            this.$router.push({ name: "server", query: query });
        }
    }
};
</script>

<template>
    <input class="search" type="text" ref="search" v-on:keyup.enter="SearchMessages">
</template>
<style scoped>
.search {
    width:300px;
    outline:none;
    border:0px;
    border-radius: 5px;
    height:20px;
    color:white;
    background-color: #4f4d8c;
}
</style>
