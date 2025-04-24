<script setup>
import { ref, reactive, watch } from 'vue';
import Modal from './Modal.vue';

const props = defineProps(['ModalQuestion', 'active']);
const emit = defineEmits(['isModalActive', 'questionId', 'updateQuestion']);

let isAnswerShown = ref(false);
let isEditingQuestion = ref(false);
let isEditingAnswer = ref(false);

// Create a local copy of the question object that we can edit
const localQuestion = reactive({
    id: '',
    question: '',
    answer: ''
});

// Watch for changes in the ModalQuestion prop and update the local copy
watch(() => props.ModalQuestion, (newVal) => {
    if (newVal) {
        localQuestion.id = newVal.id;
        localQuestion.question = newVal.question;
        localQuestion.answer = newVal.answer;
    }
}, { immediate: true, deep: true });

function toggleAnswer() {
    isAnswerShown.value = !isAnswerShown.value;
    emit('questionId', localQuestion.id);
}

function startEditingQuestion() {
    isEditingQuestion.value = true;
}

function saveQuestion() {
    isEditingQuestion.value = false;
    // Emit the updated question to the parent
    emit('updateQuestion', { ...localQuestion });
}

function startEditingAnswer() {
    isEditingAnswer.value = true;
}

function saveAnswer() {
    isEditingAnswer.value = false;
    // Emit the updated question to the parent
    emit('updateQuestion', { ...localQuestion });
}

function closeModal() {
    emit('isModalActive', false);
    isAnswerShown.value = false;
    isEditingQuestion.value = false;
    isEditingAnswer.value = false;
}
</script>

<template>
    <Modal :active="active" @isModalActive="closeModal">
        <template #header class="is-flex">
            <div style="margin-right: 100px;">
                <button style="margin-right:auto;" class="button is-primary my-1" @click="toggleAnswer()">
                    Show answer
                </button>
            </div>

            <div style="margin-left: auto;">
                <div style="margin-left: auto; transform: scale(1.2);" class="button is-danger is-outlined"
                    @click="closeModal">
                    <span>Close</span>
                    <span class="icon is-small ml-2">
                        <i class="fas fa-times"></i>
                    </span>
                </div>
            </div>
        </template>

        <template #body>
            <!-- Editable Question -->
            <div v-if="!isEditingQuestion" @click="startEditingQuestion" class="editable-content">
                <p class="is-size-3 m-2 p-3">{{ localQuestion.question }}</p>
                <div class="edit-indicator">Click to edit</div>
            </div>
            <div v-else class="editing-container">
                <textarea v-model="localQuestion.question" class="textarea is-size-3 m-2 p-3" rows="3"></textarea>
                <div class="buttons-container">
                    <button @click="saveQuestion" class="save-button">Save</button>
                </div>
            </div>
        </template>

        <template #footer>
            <div class="has-text-centered" v-if="isAnswerShown">
                <!-- Editable Answer -->
                <div v-if="!isEditingAnswer" @click="startEditingAnswer" class="editable-content">
                    <p class="is-size-3 m-2 p-3">{{ localQuestion.answer }}</p>
                    <div class="edit-indicator">Click to edit</div>
                </div>
                <div v-else class="editing-container">
                    <textarea v-model="localQuestion.answer" class="textarea is-size-3 m-2 p-3" rows="2"></textarea>
                    <div class="buttons-container">
                        <button @click="saveAnswer" class="save-button">Save</button>
                    </div>
                </div>
            </div>
            <div class="has-text-centered" v-else>
                <p class="is-size-3 m-2 p-3 placeholder-text">
                    Click "Show answer" to reveal
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

.editable-content {
    position: relative;
    cursor: pointer;
    padding: 10px;
    border-radius: 8px;
    border: 2px dashed transparent;
    transition: all 0.2s ease;
}

.editable-content:hover {
    background-color: #f5f5f5;
    border-color: #2ca0ffbd;
}

.edit-indicator {
    position: absolute;
    right: 10px;
    bottom: 5px;
    font-size: 12px;
    color: #999;
    opacity: 0;
    transition: opacity 0.2s ease;
}

.editable-content:hover .edit-indicator {
    opacity: 1;
}

.editing-container {
    margin: 10px 0;
}

.textarea {
    width: 100%;
    border: 2px solid #2ca0ffbd;
    border-radius: 8px;
    font-family: inherit;
    resize: vertical;
}

.buttons-container {
    display: flex;
    justify-content: flex-end;
    margin-top: 10px;
}

.save-button {
    background-color: #2ca0ffbd;
    padding: 5px 15px;
    font-size: 16px;
}

.placeholder-text {
    color: #999;
    font-style: italic;
}
</style>