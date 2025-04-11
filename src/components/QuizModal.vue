<script setup>
import { ref } from 'vue';

import Modal from './Modal.vue'
const props = defineProps(['ModalQuestion', 'active']);
const emit = defineEmits(['isModalActive', 'questionId']);

let isAnswerShown = ref(false);
function toggleAnswer() {
    isAnswerShown.value = !isAnswerShown.value;
    emit('questionId', props.ModalQuestion.id);
}

</script>
<template>
    <Modal :active="active" @isModalActive="e => { emit('isModalActive', e); isAnswerShown = false }">
        <template #header class="is-flex">

            <div style="margin-right: 100px;">
                <button style="margin-right:auto;" class="button is-primary my-1" @click="toggleAnswer()">
                    Show answer
                </button>
            </div>

            <div style="margin-left: auto;">
                <div style="margin-left: auto; 
                     transform: scale(1.2);" class="button is-danger is-outlined"
                    @click="() => { emit('isModalActive', e); isAnswerShown = false }">
                    <span>Close</span>
                    <span class="icon is-small ml-2">
                        <i class="fas fa-times"></i>
                    </span>
                </div>
            </div>

        </template>

        <template #body>
            <p class="is-size-3 m-2 p-3">{{ ModalQuestion.question }}</p>
        </template>

        <template #footer>

            <div class="has-text-centered">
                <p class="is-size-3 m-2 p-3" :style="{ visibility: isAnswerShown ? 'visible' : 'hidden' }">
                    {{ ModalQuestion.answer }}
                </p>
            </div>

        </template>
    </Modal>
</template>

<style scoped>
button {
    background-color: #2ca0ffbd;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    color: white;
    font-size: 23px;
    text-align: center;
    padding: 10px;
}

button:hover {
    background-color: #2f90ff;
}
</style>
