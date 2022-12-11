<script lang="ts">
export default {
    methods: {
        SearchMessages: function(){
            var query: any = this.$route.query;
            console.log(query)
            if(query.id == null){ 
                return;
            }
            if(query.channel == null){
                return;
            }
            var querybody: any = {id: query.id, channel: query.channel};
            var message;
            if((this.$refs as any).search.value.trim().length > 1){
                querybody.messageQuery = (this.$refs as any).search.value
            }
            this.$router.push({ name: "server", query: querybody });
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
