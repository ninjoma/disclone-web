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
        errorLabel: String
    }
})
</script>
<template> 
    <div>
        <label v-if="leftLabel || rightLabel" className="label">
            <span v-if="leftLabel" className="label-text">{{ leftLabel }}</span>
            <span v-if="rightLabel" className="label-text-alt"><a class="underline" href="#">{{ rightLabel }}</a></span>
        </label>
        <div class="flex">
            <input :type="inputType" className="input input-bordered flex-1" />
        </div>
        <label v-if="errorLabel" className="label">
            <span v-if="errorLabel" className="label-text">{{ errorLabel }}</span>
        </label>
    </div>
</template>