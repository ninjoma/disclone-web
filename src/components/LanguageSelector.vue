<template>
    <select :class="'select select-ghost w-full ' +  this.cssClass " :on-change="LanguageChanged()" v-model="Selectedlanguage">
        <option selected value="es">{{ $t('LANGUAGE.SPANISH') }}</option>
        <option value="en-US">{{ $t('LANGUAGE.ENGLISH') }}</option>
    </select>
</template>

<script>
import { defineComponent } from 'vue';
export default defineComponent({
    data() {
        return {
            Selectedlanguage: 'es',
        }
    },
    props: {
        cssClass: String,
    },
    methods: {
        LanguageChanged() {
            this.$i18n.locale = this.Selectedlanguage;
        }
    }
})
</script>

<style>
</style>