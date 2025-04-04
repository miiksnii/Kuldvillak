<script setup>
import { ref } from 'vue';
import QuizModal from './QuizModal.vue';


let id = 1; // Initialize counter
let isModalActive = ref(false);
let ModalQuestion = ref('');

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
    topic: "Test",
    questionsList: [
      { id: id++, question: "", answer: "No answer" },
      { id: id++, question: "How many years has Kaspar been coding?How many years has Kaspar been coding?How many years has Kaspar been coding?How many years has Kaspar been coding?How many years has Kaspar been coding?How many years has Kaspar been coding?How many years has Kaspar been coding?How many years has Kaspar been coding?How many years has Kaspar been coding?How many years has Kaspar been coding?", answer: "No answer" },
      { id: id++, question: "What framework ", answer: "No answer" },
      { id: id++, question: "What's Kaspar's strongest ", answer: "No answer" },
      { id: id++, question: "What type of projects does Kaspar enjoy most?10284702471204175612038738756123084716239587123695)/T #7r39719", answer: "No answer" }
    ]
  },
];



function showModal(questionObj) {
  isModalActive.value = true;
  ModalQuestion = questionObj;
}

const players = ref([
  { name: "Kaspar", points: 0 },
  { name: "Tauri", points: 0 },
  { name: "Martin", points: 0 },
  { name: "Kaupo", points: 0 },
]);

function increasePoints(player) {
  player.points += 100; 
}

function decreasePoints(player) {
  player.points -= 100; 
}

</script>

<template>

  <div class="columns">
    <div class="column kuldvillak-data" v-for="data in kuldvillak_data" :key="data.id">
      <div class="header box">
        <p class="header-text is-text-center my-2 py-2 py-5">{{ data.topic }}</p>
      </div>

      <div class="numbered-cards">
        <div class="numbered-card is-size-2 is-text-center my-2 py-2 py-5"
         v-for="question, index in data.questionsList"
          :key="question.id" @click="showModal(question)">
          ${{ (index + 1) * 100 }}
        </div>
      </div>
    </div>

    <QuizModal :ModalQuestion="ModalQuestion" :active="isModalActive" @isModalActive="e => isModalActive = e">
    </QuizModal>

  </div>

  <div class="bottom-container">
      <div class="name-box" v-for="player in players" :key="player.name">
        <div>{{ player.name }}</div>
        <div class="points-box">
          {{ player.points }}
        </div>
        <div class="buttons">
          <button @click="decreasePoints(player)">-</button>
          <button @click="increasePoints(player)">+</button>
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
  font-size:30px;
  font-weight:900;
  text-align: center;
  font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
}

button:hover {
  background-color: #2f90ff;
}
</style>