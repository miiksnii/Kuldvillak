<script setup>
import { ref } from "vue";
import { useRouter } from 'vue-router';

import Tabs from "./Tabs.vue";

const loginUsername = ref('');
const loginPassword = ref('');
const message = ref('');

const storedUsername = sessionStorage.getItem('username');
const storedPassword = sessionStorage.getItem('password');

const router = useRouter();

function login() {
    if (loginUsername.value === storedUsername && loginPassword.value === storedPassword) {
        message.value = 'Login successful!';

        // Redirect to 'kuldvillak' page
        router.push({ name: 'kuldvillak' });  // Replace with your actual route name
    } else {
        message.value = 'Invalid username or password';
    }
}
</script>

<template>
    <Tabs></Tabs>
    <div class="field">
        <div class="control">
            <input style="width: 15cm; font-size: 19px; margin-top: 17%;" v-model="loginUsername" class="input" type="text" placeholder="Enter your username" />
        </div>
    </div>
    <div class="field">
        <div class="control">
            <input style="width: 15cm; font-size: 19px;" v-model="loginPassword" class="input" type="password" placeholder="Enter your password" />
        </div>
    </div>
    <div class="field">
        <p class="control">
            <button style="font-size: larger; width: 3.75cm;" @click="login" class="button has-text-white is-success">
                Login
            </button>
        </p>
    </div>

    <div v-if="message">
        {{ message }}
    </div>
</template>

<style scoped></style>
