<script setup>

import Tabs from './components/Tabs.vue'

</script>

<template>
  <section class="hero is-fullheight">
    <div class="hero-body">
      <div class="container has-text-centered">
        <Tabs></Tabs>
        <router-view></router-view>
      </div>
    </div>
  </section>
</template>





<style scoped></style>
