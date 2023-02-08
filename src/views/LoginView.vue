<script lang="ts">
import { defineComponent } from 'vue';
import LoginForm from '../components/LoginForm.vue';
import TextInput from '../components/TextInput.vue';

export default defineComponent({
    components: {
        LoginForm
    }
})
</script>

<template>
    <div class="mx-auto flex justify-center items-center h-screen max-w-lg">
        <LoginForm/>
    </div>
</template>