<script setup>
import { useRouter } from 'vue-router'

const router = useRouter();

function goToKuldvillak() {
    router.push({ name: 'Kuldvillak' });
}

function goToCredits() {
    router.push({ name: 'Credits' })
}

</script>

<template>
    <div class="hero-body">
        <div class="container has-text-centered">
            <h1 class="title is-size-1 has-text-weight-bold has-text-white">
                Sinivillak
            </h1>
            <p class="subtitle is-size-4 mt-4 has-text-white">
                Tere tulemast Eesti parimasse viktoriinimängu! :D<br>
                Sinivillak, sest disain on sinine. <br>
            </p>
            <ul>
                <li><button class="button is-large is-primary mt-6 has-text-white" @click="goToKuldvillak">Alusta mängu</button></li>
                <li><button class="button is-large is-primary mt-6 has-text-white"  @click="goToCredits">Loojad</button></li>
            </ul>
        </div>
    </div>
</template>

<style scoped></style>