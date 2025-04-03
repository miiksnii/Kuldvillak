<script setup>
import { ref } from 'vue';

let id = 1; // Initialize counter
let isModalActive = ref(false);

const kuldvillak_data = [
  {
    id: id++,
    topic: "About Kaspar Bergert",
    questionsList: [
      { id: id++, question: "What is Kaspar's favorite programming language?", answer: "No answer" },
      { id: id++, question: "How many years has Kaspar been coding?", answer: "No answer" },
      { id: id++, question: "What framework does Kaspar specialize in?", answer: "No answer" },
      { id: id++, question: "What's Kaspar's strongest technical skill?", answer: "No answer" },
      { id: id++, question: "What type of projects does Kaspar enjoy most?", answer: "No answer" }
    ]
  },
  {
    id: id++,
    topic: "About Kaspar Bergert",
    questionsList: [
      { id: id++, question: "What is Kaspar's favorite programming language?", answer: "No answer" },
      { id: id++, question: "How many years has Kaspar been coding?", answer: "No answer" },
      { id: id++, question: "What framework does Kaspar specialize in?", answer: "No answer" },
      { id: id++, question: "What's Kaspar's strongest technical skill?", answer: "No answer" },
      { id: id++, question: "What type of projects does Kaspar enjoy most?", answer: "No answer" }
    ]
  },
  {
    id: id++,
    topic: "About Kaspar Bergert",
    questionsList: [
      { id: id++, question: "What is Kaspar's favorite programming language?", answer: "No answer" },
      { id: id++, question: "How many years has Kaspar been coding?", answer: "No answer" },
      { id: id++, question: "What framework does Kaspar specialize in?", answer: "No answer" },
      { id: id++, question: "What's Kaspar's strongest technical skill?", answer: "No answer" },
      { id: id++, question: "What type of projects does Kaspar enjoy most?", answer: "No answer" }
    ]
  },
  {
    id: id++,
    topic: "About Kaspar Bergert",
    questionsList: [
      { id: id++, question: "What is Kaspar's favorite programming language?", answer: "No answer" },
      { id: id++, question: "How many years has Kaspar been coding?", answer: "No answer" },
      { id: id++, question: "What framework does Kaspar specialize in?", answer: "No answer" },
      { id: id++, question: "What's Kaspar's strongest technical skill?", answer: "No answer" },
      { id: id++, question: "What type of projects does Kaspar enjoy most?", answer: "No answer" }
    ]
  },
  {
    id: id++,
    topic: "About Kaspar Bergert",
    questionsList: [
      { id: id++, question: "What is Kaspar's favorite programming language?", answer: "No answer" },
      { id: id++, question: "How many years has Kaspar been coding?", answer: "No answer" },
      { id: id++, question: "What framework does Kaspar specialize in?", answer: "No answer" },
      { id: id++, question: "What's Kaspar's strongest technical skill?", answer: "No answer" },
      { id: id++, question: "What type of projects does Kaspar enjoy most?", answer: "No answer" }
    ]
  },
];

function showModal(question) {
  isModalActive.value = true;
}
</script>

<template>
  <div class="main-container">
    <div class="columns">
      <div class="column kuldvillak-data" v-for="data in kuldvillak_data" :key="data.id">
        <div class="header box">
          <p class="header-text is-text-center my-2 py-2 py-5">Hello I am Kaspar Bergert</p>
        </div>

        <div class="numbered-cards">
          <div class="numbered-card is-size-2 is-text-center my-2 py-2 py-5"
            v-for="question, index in data.questionsList" :key="question.id" @click="showModal(data)">
            ${{ (index + 1) * 100 }}
          </div>
        </div>
      </div>

      <!-- Modal -->
      <div class="modal" :class="{ 'is-active': isModalActive }">
        <div class="modal-background" @click="isModalActive.value = false"></div>
        <div class="modal-content">
        </div>
        <button class="modal-close is-large" aria-label="close"></button>
      </div>
    </div>

    <!-- Bottom section for names -->
    <div class="bottom-names">
      <div class="name-box" v-for="name in ['Kaspar', 'Tauri', 'Martin']" :key="name">
        {{ name }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  background-color: #2f90ff;
  color: rgb(255, 255, 255);
  font-weight: 600;
  font-size: 0.8cm;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
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
  height: calc(100vh - 100px);
  /* Adjust height to leave space for bottom section */
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


.bottom-names {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 10px;
  font-size: 50px;
  
}

.name-box {
  background-color: #ffffffbd;
  border-radius: 8px;
  padding: 10px;
  text-align: center;
}
</style>
