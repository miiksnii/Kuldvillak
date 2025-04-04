<script setup>
import { ref } from "vue";

const loginUsername = ref('');
const loginPassword = ref('');
const message = ref('');

const storedUsername = sessionStorage.getItem('username');
const storedPassword = sessionStorage.getItem('password');

function login() {
    if (loginUsername.value === storedUsername && loginPassword.value === storedPassword) {
        message.value = 'Login successful!';
    } else {
        message.value = 'Invalid username or password.';
    }
}
</script>

<template>
    <div class="field">
        <div class="control">
            <input v-model="loginUsername" class="input" type="text" placeholder="Enter your username" />
        </div>
    </div>
    <div class="field">
        <div class="control">
            <input v-model="loginPassword" class="input" type="password" placeholder="Enter your password" />
        </div>
    </div>
    <div class="field">
        <p class="control">
            <button @click="login" class="button is-success">
                Login
            </button>
        </p>
    </div>

    <div v-if="message">
        {{ message }}
    </div>
</template>

<style scoped>

</style>
