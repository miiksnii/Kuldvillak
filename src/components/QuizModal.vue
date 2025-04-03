<script setup>

import Modal from './Modal.vue'
const props = defineProps(['questionObj', 'active']);
const emit = defineEmits(['isModalActive']);

</script>
<template>
    <Modal :active="active" @isModalActive="e => emit('isModalActive', e)">
        <template #header>
            <button class="button is-primary my-2">
                Show answer
            </button>
            <span class="is-size-7">or press space</span>
        </template>
        <template #body>
            <p class="is-size-3 has-text-black m-2 p-3">{{ questionObj.question }}</p>

        </template>
        <template #footer>
        </template>
    </Modal>
</template>