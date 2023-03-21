<template>
    <div class="flex items-center gap-3">
        <div className="h-10 w-10 bg-white rounded-full">

        </div>
        <div className="">
            {{ this.user.username }}
        </div>
    </div>
</template>
<script lang="ts">
export default {
    prop: {
        user: null,
    }
}
</script>