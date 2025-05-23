<script setup>

</script>

<template>
  <section class="section is-fullheight has-text-centered">
    <router-view></router-view>
  </section>
</template>

<style>
button {
  transition: transform 0.2s ease, background-color 0.2s ease;
}

button:hover {
  transform: scale(1.05);
  background-color: #2759aa;
}

button:active {
  transform: scale(0.95);
}
</style>
