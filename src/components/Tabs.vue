<script setup>
import { ref } from 'vue';
import { RouterLink, useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const activeTab = ref(0);


console.log(router.getRoutes(), route);
</script>

<template>
  <div class="tabs is-centered">
    <ul>
      <li v-for="(item, index) in $router.getRoutes()" :key="item.path" 
          :class="{ 'is-active': activeTab === index }"
          @click="activeTab = index">
        <RouterLink :to="item.path" class="has-text-white">{{ item.name }}</RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped>
</style>
