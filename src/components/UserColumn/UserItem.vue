<script lang="ts">
export default {
    props: ['name'],
    mounted: async function(){

    },
    methods: {
        generateRandomBckg: function(): any {
            var firstColor = Math.floor(Math.random()*16777215).toString(16);
            var secondColor = Math.floor(Math.random()*16777215).toString(16);
            return "linear-gradient(45deg, #" + firstColor + " 0%, #" + secondColor + " 100%)"
        }
    }
}
</script>
<template>
<div class="container">
    <div class="image" :style="{ background:generateRandomBckg() }">

    </div>
    <div>
        {{ name }}
    </div>
</div>
</template>

<style scoped>
.container{
    color:white;
    font-size: 16px;
    display:flex;
    flex-direction: row;
    align-items: center;
    padding-top:5px;
    padding-bottom:5px;
    padding-left:12px;
    padding-right:12px;
    min-height:0;
}

.image {
    width:40px;
    height:40px;
    background-color:white;
    border-radius: 50%;
    margin-right:10px;
}
</style>