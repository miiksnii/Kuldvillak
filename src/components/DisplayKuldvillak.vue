<script setup>
import { ref } from 'vue';
import { defineEmits, defineProps } from 'vue';
import QuizModal from './QuizModal.vue';

const props = defineProps(['kuldvillak_data']);
const emit = defineEmits(['PointsForUser', 'createNewQuestionTable', 'removeQuestionTable']);

let isModalActive = ref(false);
let ModalQuestion = ref('');
let isAnswered = ref([]); //holds a list of answered modal questions

// Start editing the topic
function editTopic(data) {
  data.isEditingTopic = true; // Toggle the editing state
}

// Save the topic after editing
function saveTopic(data) {
  data.isEditingTopic = false; // Switch back to text
}

// Show Modal for answering questions
function showModal(questionObj) {
  isModalActive.value = true;
  ModalQuestion = questionObj;
}

// Function to handle points
function MakeCurrentPoints(points) {
  emit('PointsForUser', points); // Send the points to the parent component
}

// Emit signal to create a new question table
function createNewQuestionTable() {
  emit('createNewQuestionTable', props.kuldvillak_data);
}

function removeQuestionTable(index) {
  emit('removeQuestionTable', index);
}


// Handle question updates from the modal
function updateQuestion(updatedQuestion) {
  // Find and update the question in kuldvillak_data

  console.log(updatedQuestion.id);

  props.kuldvillak_data.forEach(category => {
    const questionIndex = category.questionsList.findIndex(q => q.id === updatedQuestion.id);
    if (questionIndex !== -1) {
      category.questionsList[questionIndex] = updatedQuestion;
    }
  });
}
</script>

<template>
  <div class="columns">
    <div class="column kuldvillak-data question_table" v-for="(data, index) in kuldvillak_data" :key="data.id">
      <div class="header box">
        <!-- Button aligned to the top-left -->
        <button class="remove-table left-button" @click="removeQuestionTable(index)">-</button>

        <!-- Editable Topic -->
        <p v-if="!data.isEditingTopic" class="header-text is-text-center my-2 py-2 py-5 is-size-4"
          @click="editTopic(data)">
          {{ data.topic }}
        </p>
        <input v-else type="text" v-model="data.topic" class="header-text is-text-center my-2 py-2 py-5 is-size-4"
          @blur="saveTopic(data)" @keyup.enter="saveTopic(data)">
      </div>

      <div class="numbered-cards">
        <div class="numbered-card is-size-2 is-text-center my-2 py-2 py-5"
          :class="{ 'is-answered': isAnswered.includes(question.id) }" v-for="(question, index) in data.questionsList"
          :key="question.id" @click="() => { showModal(question); MakeCurrentPoints(((index + 1) * 100)) }">

          <!-- Non-editable Question -->
          <p>
            ${{ (index + 1) * 100 }}
          </p>
        </div>
      </div>
    </div>

    <button style="margin-top: 12px;" @click="createNewQuestionTable()">+</button>
  </div>

  <QuizModal :ModalQuestion="ModalQuestion" :active="isModalActive"
    @questionId="questionId => { isAnswered.push(questionId); }" @isModalActive="e => isModalActive = e"
    @updateQuestion="updateQuestion">
  </QuizModal>
</template>

<style scoped>

.question_table {
  max-width: 25%;
}

.is-answered {
  background-color: #2f90ff2c !important;
}

.header {
  background-color: #2f90ff;
  font-weight: 600;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  user-select: none;
  color: white;
  display: flex;
  flex-direction: column;
  /* Stack the elements vertically */
  align-items: flex-start;
  /* Align content to the left */
}

.left-button {
  margin-bottom: 10px;
  /* Space between button and text */
  width: 50px;
  /* Smaller width */
  height: 30px;
  /* Smaller height */
  font-size: 18px;
  /* Smaller text */
  padding: 5px;
  /* Reduce padding */
}


.header-text {
  width: 100%;
  /* Ensures the p element takes full width of the header */
  text-align: center;
  /* Centers the text */
}

.numbered-card {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  background-color: #2ca0ffbd;
  border-radius: 10px;
  text-align: center;
  cursor: pointer;
  user-select: none;
  transition: transform 0.2s cubic-bezier(0.1, 3, 0.9, 1);
  color: rgb(255, 255, 255);
}

.numbered-card:hover {
  background-color: #2f90ff;
  transform: scale(1.05);
}

.columns {
  height: calc(100vh - 450px);
}

.kuldvillak-data {
  height: fit-content;
}

.main-container {
  display: flex;
  flex-direction: column;
  height: 100vh;
  padding-top: 11%;
}

.bottom-container {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  font-size: 50px;
}

.name-box {
  background-color: #ffffff;
  border-radius: 8px;
  padding: 15px;
  padding-top: 0px;
  text-align: center;
  z-index: 99;
}

.points-box {
  background-color: #4141413b;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 10px;
}

button {
  background-color: #2ca0ffbd;
  border: none;
  border-radius: 8px;
  width: 100px;
  height: 50px;
  cursor: pointer;
  color: white;
  font-size: 30px;
  font-weight: 900;
  text-align: center;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}

button:hover {
  background-color: #2f90ff;
}
</style>
