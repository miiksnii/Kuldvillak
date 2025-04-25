<script setup>
import { useRouter } from 'vue-router'

const router = useRouter();

function goToHome() {
    router.push({ name: 'HomePage' });
}
</script>

<template>
    <h1 class="title is-size-1 has-text-weight-bold has-text-white">
        Uuendused
    </h1>
    <!--Uuednuste kaardid-->
    <div class="card is-small has-background-white mb-4 has-text-left has-text-black">
        <div class="card-content">
            <p class="title">Mängu helid</p>
            <p class="subtitle is-6">25.04.2025</p>
            <p>Mängule pole veel lisatud helisi, kuid lisame selle veel.</p>
        </div>
    </div>
    <div class="card is-small has-background-white mb-4 has-text-left has-text-black">
        <div class="card-content">
            <p class="title">Kaart 2</p>
            <p class="subtitle is-6">25.04.2025</p>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore ratione perferendis enim iusto
                consequatur dolor perspiciatis quidem dolores nulla magni labore laudantium autem a veritatis dolore
                accusamus iure, minus sapiente.</p>
        </div>
    </div>
    <!--Uuenduste kaartide end-->
    <button class="button is-large is-primary mt-6 has-text-white" @click="goToHome">Tagasi</button>
</template>

<style scoped>
.card {
    width: 80%;
    max-width: 400px;
    margin: 0 auto;
    border-radius: 10px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.title {
    font-size: 1.8rem;
    font-weight: 700;
}

.card-content {
    padding: 15px;
}
</style>