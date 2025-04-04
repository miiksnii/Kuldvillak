<script setup>

import DisplayKuldvillak from './components/DisplayKuldvillak.vue';


import Tabs from './components/Tabs.vue';
import Login from './components/Login.vue';
import SignIn from './components/SignIn.vue';

import Kuldvillak from './components/DisplayKuldvillak.vue'

const tabItems = [
  { name: "Login", component: Login },
  { name: "Sign In", component: SignIn },
  { name: "Kuldvillak", component: Kuldvillak },
];
</script>

<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <router-view></router-view>
        <Tabs :tabs="tabItems"></Tabs>
      </div>
    </div>
  </section>
</template>





<style scoped></style>
