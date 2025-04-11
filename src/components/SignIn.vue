<script setup>
import { ref } from "vue";

import Tabs from "./Tabs.vue";

const username = ref('');
const password = ref('');
const confirmPassword = ref('');
const message = ref('');

function Register() {
    if (!username.value) {
        message.value = 'Please enter a username';
        return;
    }
    if (!password.value || !confirmPassword.value) {
        message.value = 'Please enter a password and confirm it';
        return;
    }
    if (password.value !== confirmPassword.value) {
        message.value = 'Passwords do not match';
        return;
    }

    sessionStorage.setItem('username', username.value);
    sessionStorage.setItem('password', password.value);

    message.value = 'Account successfully created!';
}
</script>

<template>
    <Tabs></Tabs>
    <div class="field">
        <div class="control">
            <input  id="usr" style="width: 15cm; font-size: 19px; margin-top: 15%;" v-model="username" class="input" type="text" placeholder="Create username" />
        </div>
    </div>
    <div class="field">
        <div class="control">
            <input id="pw" style="width: 15cm; font-size: 19px;" v-model="password" class="input" type="password" placeholder="Create password" />
        </div>
    </div>
    <div class="field">
        <div class="control">
            <input id="rpw" style="width: 15cm; font-size: 19px;" v-model="confirmPassword" class="input" type="password"
                placeholder="Re-enter your password" />
        </div>
    </div>
    <div class="field">
        <p class="control">
            <button style="font-size: larger; width: 3.75cm; background-color: #2ca0ffbd;" @click="Register" class="button is-success">
                Sign in
            </button>
        </p>
    </div>

    <div v-if="message">
        {{ message }}
    </div>
</template>

<style scoped></style>
