<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    props: {
        inputType: {
            type: String,
            default: "text",
            inputStyle: String
        },
        leftLabel: String,
        rightLabel: String,
        errorLabel: String,
        showError: {
            type: Boolean,
            default: false,
        },
        modelValue: null,
    },
    setup: () => {
        const handleInputChange = (event: Event) =>
            (event.target as HTMLInputElement).value

        return { handleInputChange }
    },
})
</script>
<template>
    <div>
        <label v-if="leftLabel || rightLabel" className="label">
            <span v-if="leftLabel" className="label-text">{{ leftLabel }}</span>
            <span v-if="rightLabel" className="label-text-alt"><a class="underline" href="#">{{ rightLabel }}</a></span>
        </label>
        <div class="flex">
            <input :type="inputType" :class="'input input-bordered flex-1 ' + (this.showError ? 'input-error shake' : '')"
                :value="modelValue"
                @input="$emit('update:modelValue', handleInputChange($event)); this.$emit('onChange');" />
        </div>
        <label v-if="errorLabel" className="label">
            <span v-if="errorLabel" className="label-text">{{ errorLabel }}</span>
        </label>
    </div>
</template>
<style>
.shake{
   animation: horizontal-shaking 0.25s; 
}
@keyframes horizontal-shaking {
    0% {
        transform: translateX(0)
    }

    25% {
        transform: translateX(5px)
    }

    50% {
        transform: translateX(-5px)
    }

    75% {
        transform: translateX(5px)
    }

    100% {
        transform: translateX(0)
    }
}</style>