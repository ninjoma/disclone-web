<script lang="ts">
export default {
  props: ['type', 'name', 'id'],
  methods: {
    redirect: function(){
        var megquery = this.$route.query
        this.$router.push({ name: "server", query: {id: this.$route.query.id, channel: this.id} });
    }
  }
}
</script>

<template>
    <button class="channel" v-on:click="redirect">
        <i v-if="type === 'text'" class="bi bi-quote icon-big"></i> 
        <i v-if="type === 'voice'" class="bi bi-volume-down-fill icon-big"></i>
        <span class="name">{{ name }}</span>
    </button>
</template>

<style scoped>
.channel {
    width:100%;
    font-family: 'Open Sans';
    text-align: left;
    border: 0;
    background-color: #4f4d8c;
    border-radius: 5px;
    height:32px;
    color:white;
    margin-top:5px;
    margin-bottom:5px;
    display:flex;
    align-items: center;
}

.channel > i {
    padding-right:5px;
}

.channel:hover {
    background-color: #5F5DA6;
}

</style>