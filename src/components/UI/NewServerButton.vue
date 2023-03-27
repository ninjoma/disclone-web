<template>
    <div class="w-full w-16 h-16 min-h-[4.5rem] bg-base-200 border-2 border-zinc-400 flex items-center justify-center hover-radius-change cursor-pointer"
        v-on:mouseenter="handleAnnotation(true);" v-on:mouseleave="handleAnnotation(false)" v-on:click="">
        <span ref='serverText' class="text-xl font-bold zunc-700">
            <font-awesome-icon :icon="['fas', 'plus']" />
        </span>
    </div>
    <div ref="serverAnnotation"
        class="absolute bg-inherit left-20 z-50 rounded shadow-md px-2 py-0.5 on-show hidden text-ellipsis">
        {{ this.$t("SERVER.ADDSERVER") }}
    </div>
</template>
<script lang="ts">
export default {
    methods: {
        handleAnnotation(isActive: boolean) {
            if (isActive) {
                this.$refs.serverAnnotation.style.display = "block";
                this.$refs.serverAnnotation.style.top = this.$refs.serverText.getBoundingClientRect().top + 'px';
            } else {
                this.$refs.serverAnnotation.style.display = "";
            }
        },
    }
}
</script>
<style>
.hover-radius-change {
    border-radius: 50%;
    transition: 0.25s border-radius;
}

.hover-radius-change:hover {
    border-radius: 30%;
}

.on-show {
    animation-name: showAnnotation;
    animation-duration: 0.125s;
}

@keyframes showAnnotation {
    0% {
        opacity: 0;
        transform: scale(.95)
    }

    50% {
        transform: scale(1.05)
    }

    100% {
        opacity: 1;
        transform: scale(1)
    }
}
</style>