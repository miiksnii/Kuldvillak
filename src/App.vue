<script setup>
import Tabs from './components/Tabs.vue';
import Login from './pages/Login.vue';
import SignIn from './pages/SignIn.vue';

const tabItems = [
  { name: "Login", component: Login },
  { name: "Sign In", component: SignIn },
];
</script>

<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <Tabs :tabs="tabItems"></Tabs>
        <router-view></router-view>
      </div>
    </div>
  </section>
</template>
