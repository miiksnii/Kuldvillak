<script setup>
import { ref } from 'vue';
import { RouterLink, useRoute, useRouter } from 'vue-router';

import Login from './Login.vue';
import SignIn from './SignIn.vue';

const router = useRouter();
const route = useRoute();


const activeTab = ref(0);

console.log(router.getRoutes(), route);

</script>

<template>
    <div>
        <div class="tabs is-centered">
            <ul>
                <li v-for="(item) in $router.getRoutes()" :key="item.path"
                    :class="{ 'is-active': activeTab === item.path }" @click="activeTab = item.path">
                    <RouterLink :to="item.path">{{ item.name }}</RouterLink>
                </li>
            </ul>
        </div>
    </div>
</template>

<style scoped></style>
