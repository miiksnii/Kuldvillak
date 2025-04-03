<script setup>

import Modal from './Modal.vue'
const props = defineProps(['questionObj', 'active']);
const emit = defineEmits(['isModalActive']);

</script>
<template>
    <Modal :active="active" @isModalActive="e => emit('isModalActive', e)">
        <template #header>
            <p class="modal-card-title"></p>
        </template>
        <template #body>
            <p>Main content goes here</p>
            <button class="button">Click me</button>
        </template>
        <template #footer>
        </template>
    </Modal>
</template>