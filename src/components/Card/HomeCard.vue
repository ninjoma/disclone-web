<template>
        <div class="card lg:card-side bg-base-100 shadow-x1 shadow-md max-w-screen-lg my-6">
            <figure class="lg:w-3/4 max-w-sm"><img :src="this.img" class="box-border w-full lg:rounded-l-lg" /></figure>
            <div class="card-body flex justify-center flex-col">
                <h2 class="card-title">{{ this.cardTitle }}</h2>
                <p>{{ this.cardBody }}</p>
                <div class="card-actions justify-end">
                </div>
            </div>
    </div>
</template>
<script lang="ts">
export default {
    props: {
        cardTitle: {
            type: String,
            default: '',
        },
        cardBody: {
            type: String,
            default: '',
        },
        img: {
            type: String,
            default: '',
        }
    }
}
</script>