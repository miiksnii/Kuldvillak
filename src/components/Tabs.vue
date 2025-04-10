<script setup>
import { ref } from 'vue';
import { RouterLink, useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();
const activeTab = ref(0);

const UserAvailableTabs = [
  { path: '/', name: "Login" },
  { path: '/SignIn', name: "Sign in" },
];

</script>

<template>
  <div class="tabs is-centered">
    <ul>
      <li v-for="(item, index) in UserAvailableTabs" :key="item.path" @click="activeTab = index">
        <RouterLink :to="item.path" class="has-text-white">{{ item.name }}</RouterLink>
      </li>
    </ul>
  </div>
</template>

<style scoped></style>
