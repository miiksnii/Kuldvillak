<script setup>
import { ref } from 'vue'
import QuizModal from './QuizModal.vue'
import soundFile from '../assets/answering.mp3';


const props = defineProps({
  kuldvillak_data: {
    type: Array,
    required: true
  }
})
// defineEmits is a compiler macro—do NOT import it
const emit = defineEmits([
  'PointsForUser',
  'createNewQuestionTable',
  'removeQuestionTable',
  // if you want the parent to handle updateQuestion
  'updateQuestion'
])

const isModalActive = ref(false)
const ModalQuestion = ref(null)
const isAnswered = ref([])

// Start editing the topic
function editTopic(category) {
  category.isEditingTopic = true
}

// Save (and blur) the topic after editing
function saveTopic(category) {
  category.isEditingTopic = false
}

// Show Modal for answering questions
function showModal(questionObj) {
  ModalQuestion.value = questionObj
  isModalActive.value = true
}

// Handle question‐box click
function onQuestionClick(question, qIndex) {
  showModal(question)
  emit('PointsForUser', (qIndex + 1) * 100)
}

// Mark a question as answered
function markAnswered(questionId) {
  if (!isAnswered.value.includes(questionId)) {
    isAnswered.value.push(questionId)
  }
}

// Create / remove whole tables
function createNewQuestionTable() {
  emit('createNewQuestionTable', props.kuldvillak_data)
}
function removeQuestionTable(index) {
  emit('removeQuestionTable', index)
}

// Close modal (from child)
function closeModal(active) {
  isModalActive.value = active
}

// Pass updated question back to parent (or update locally if you prefer)
function updateQuestion(updatedQuestion) {
  emit('updateQuestion', updatedQuestion)
}

var audio = new Audio(soundFile);

</script>

<template>
  <div class="columns">
    <div class="column kuldvillak-data question_table" v-for="(category, catIndex) in kuldvillak_data"
      :key="category.id">
      <div class="header box">
        <button class="remove-table left-button" @click="removeQuestionTable(catIndex)">–</button>

        <p v-if="!category.isEditingTopic" class="header-text is-text-center  is-size-4" @click="editTopic(category)">
          {{ category.topic }}
        </p>
        <input v-else type="text" v-model="category.topic" class="header-text is-text-center my-2 py-2 py-5 is-size-4"
          @blur="saveTopic(category)" @keyup.enter="saveTopic(category)" />
      </div>

      <div class="numbered-cards">
        <div v-for="(question, qIndex) in category.questionsList" :key="question.id"
          class="numbered-card is-size-2 is-text-center my-2 py-2 py-5"
          :class="{ 'is-answered': isAnswered.includes(question.id) }" @click="onQuestionClick(question, qIndex)">
          :class="{ 'is-answered': isAnswered.includes(question.id) }"
          @click="onQuestionClick(question, qIndex)
          audio.play();"
          >
          <p>${{ (qIndex + 1) * 100 }}</p>
        </div>
      </div>
    </div>

    <button class="add_new_question_table" @click="createNewQuestionTable()">
      + Add Table
    </button>

  </div>

  <QuizModal :ModalQuestion="ModalQuestion" :active="isModalActive" @questionId="markAnswered"
    @isModalActive="closeModal" @updateQuestion="updateQuestion" />
</template>

<style scoped>
.header.box {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  /* Align to top */
}

.add_new_question_table {
  display: inline-block;
  margin-top: 12px;
  padding: 0.75em 1.5em;
  background-color: #2f90ff;
  color: #ffffff;
  font-size: 1rem;
  font-weight: 600;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease, transform 0.1s ease;
  max-height: 3em;
}

.add_new_question_table:hover {
  background-color: #005eca;
  transform: translateY(-2px);
}

.add_new_question_table:active {
  background-color: #2f90ff;
  transform: translateY(0);
}


.question_table {
  max-width: 25%;
}

.header {
  background-color: #2f90ff;
  font-weight: 600;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans',
    Arial, sans-serif;
  user-select: none;
  color: white;
  display: flex;
  flex-direction: column;
  height: 10em;
  /* fixed height for equal boxes */
  justify-content: center;
  overflow: hidden;
  /* hide overflow if topic is too long */

}

.left-button {
  margin-bottom: 10px;
  width: 50px;
  height: 30px;
  font-size: 18px;
  padding: 5px;
  background-color: #0068df;
  border-radius: 20%;
}

.header-text {
  width: 100%;
}

.numbered-card {
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande',
    'Lucida Sans', Arial, sans-serif;
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

.is-answered {
  background-color: #2f90ff2c !important;
}

.columns {
  height: calc(100vh - 450px);
  align-items: stretch;
  /* ensure equal-height columns */
}

.kuldvillak-data {
  height: fit-content;
}

/* rest of your existing styles… */
</style>
