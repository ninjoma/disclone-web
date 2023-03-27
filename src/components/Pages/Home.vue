<template>
    <div class="bg-base-200 w-full h-full flex justify-center flex-col">
        <div className="flex-none lg:hidden w-full bg-base-200 p-2  border-b-2 border-zinc-700">
            <label htmlFor="serverbar-toggle" className="btn btn-square btn-ghost text-xl">
                <font-awesome-icon icon="fa-solid fa-bars" />
            </label>
        </div>
        <div class="bg-base-200 w-full h-full flex justify-center items-center flex-col p-9">
            <HomeCard :cardTitle="this.$t('HOME.SALUTE')" :cardBody="this.$t('HOME.WELCOMEMSG')" img="src/assets/disclone.png"></HomeCard>
            <HomeCard :cardTitle="this.$t('HOME.NITRO')" :cardBody="this.$t('HOME.NITROMSG')" img="https://variety.com/wp-content/uploads/2019/06/discrod-nitro-chara.png"></HomeCard>
        </div>
    </div>
</template>
<script lang="ts">
import HomeCard from '../Card/HomeCard.vue';

export default {
    components: {
        HomeCard
    }
}
</script>