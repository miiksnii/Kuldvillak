<script setup>
import { useRouter } from 'vue-router'

const router = useRouter();

function goToHome() {
    router.push({ name: 'HomePage' });
}
</script>

<template>
    <button class="button is-large is-primary mt-6 has-text-white" @click="goToHome">Back</button>
</template>