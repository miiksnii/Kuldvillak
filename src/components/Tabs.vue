<script setup>
import { ref } from 'vue';

defineProps({
    tabs: Array,
});

const activeTab = ref(0);
</script>

<template>
    <div>
        <div class="tabs">
            <ul>
                <li v-for="(tab, index) in tabs" :key="index" :class="{ 'is-active': activeTab === index }"
                    @click="activeTab = index">
                    <a>{{ tab.name }}</a>
                </li>
            </ul>
        </div>

        <div class="tab-content">
            <component :is="tabs[activeTab].component"></component>
        </div>
    </div>
</template>

<style scoped></style>
