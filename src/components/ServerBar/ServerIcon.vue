<script lang="ts">
import { defineComponent } from 'vue';

export interface ServerIconData {
    id: Number,
    name: String
}

export default defineComponent({
    props: ['name', 'id'],
    data() {
        return {
        }
    },
    methods: {
        handleAnnotation(isActive: boolean) {
            if (isActive) {
                this.$refs.serverAnnotation.style.display = "block";
                this.$refs.serverAnnotation.style.top = this.$refs.serverText.getBoundingClientRect().top + 'px';
            } else {
                this.$refs.serverAnnotation.style.display = "";
            }
        },
        OpenServer() {
            this.$store.dispatch('Server/SelectServer', this.id);
            this.$store.dispatch('Channel/FetchChannels', this.id);
        }
    }
})

</script>
<template>
    <div class="w-full w-16 h-16 min-h-[4.5rem] bg-base-200 flex items-center justify-center hover-radius-change cursor-pointer"
        v-on:mouseenter="handleAnnotation(true);" v-on:mouseleave="handleAnnotation(false)" v-on:click="OpenServer()">
        <span ref='serverText' class="font-bold">
            {{ name.substring(0, 2) }}
        </span>
    </div>
    <div ref="serverAnnotation"
        class="absolute bg-inherit left-20 z-50 rounded shadow-md px-2 py-0.5 on-show hidden text-ellipsis">
        {{ name }}
    </div>
</template>

<style scoped>
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
}</style>