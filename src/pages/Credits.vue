<script setup>
import { useRouter } from 'vue-router'

const router = useRouter();

function goToHome() {
    router.push({name: 'HomePage'});
}
</script>

<template>
    <ul>
        <li>Martin Pruus</li>
        <li>Tauri Tammela</li>
        <li>Kaspar Bergert</li>
    </ul>
    <button class="button is-large is-primary mt-6" @click="goToHome">Back</button>
</template>