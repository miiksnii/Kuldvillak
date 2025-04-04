<script setup>
 
import DisplayKuldvillak from './components/DisplayKuldvillak.vue';
 
 
import Tabs from './components/Tabs.vue';
import Login from './components/Login.vue';
import SignIn from './components/SignIn.vue';

const tabItems = [
  { name: "Login", component: Login },
  { name: "Sign In", component: SignIn },
];
</script>

<template>
  <div class="container is-flex is-justify-content-center is-align-items-center" style="height: 100vh;">
    <DisplayKuldvillak></DisplayKuldvillak>
  </div>
</template>
 


  <div class="container is-flex is-justify-content-center is-align-items-center" style="height: 100vh;">
    <DisplayKuldvillak></DisplayKuldvillak>
  </div>

  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <router-view></router-view>
        <Tabs :tabs="tabItems"></Tabs>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>

