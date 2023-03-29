<script lang="ts">
export default {
    props: ['user'],
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
    <div class="flex items-center gap-3">
        <div className="h-10 w-10 rounded-full" :style="{ background:generateRandomBckg() }">

        </div>
        <div className="">
            {{ user.nickname }}
        </div>
    </div>
</template>