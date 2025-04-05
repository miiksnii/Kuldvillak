<script setup>

import Tabs from './components/Tabs.vue'

</script>

<template>
  <section class="section is-fullheight has-text-centered">
    <div class="container">
      <Tabs></Tabs>
      <router-view></router-view>
    </div>
  </section>
</template>






<style scoped></style>
