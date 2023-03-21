<template>
    <div class="bg-base-200 w-full h-full flex justify-center flex-col">
        <div className="flex-none lg:hidden w-full bg-base-200 p-2  border-b-2 border-zinc-700">
            <label htmlFor="serverbar-toggle" className="btn btn-square btn-ghost text-xl">
                <font-awesome-icon icon="fa-solid fa-bars" />
            </label>
        </div>
        <div class="bg-base-200 w-full h-full flex justify-center items-center flex-col p-9">
            <div class="card lg:card-side bg-base-100 shadow-x1 shadow-md max-w-screen-lg">
                <figure class="lg:w-3/4"><img src="../../assets/disclone.png" alt="Movie" class="box-border w-full lg:rounded-l-lg"/></figure>
                <div class="card-body flex justify-center flex-col">
                    <h2 class="card-title">{{ this.$t('HOME.SALUTE') }}</h2>
                    <p>{{ this.$t('HOME.WELCOMEMSG') }}</p>
                    <div class="card-actions justify-end">
                    </div>
                </div>
            </div>
    
        </div>
    </div>
</template>
<script lang="ts">
export default {

}
</script>