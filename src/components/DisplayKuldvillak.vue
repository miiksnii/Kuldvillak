<script setup>
import { ref } from 'vue';
import { defineEmits, defineProps } from 'vue';
import QuizModal from './QuizModal.vue';

const props = defineProps(['kuldvillak_data']);
const emit = defineEmits(['PointsForUser']);


let isModalActive = ref(false);
let ModalQuestion = ref('');
let isAnswered = ref([]); //holds a list of answered modal questions


function showModal(questionObj) {
  isModalActive.value = true;
  ModalQuestion = questionObj;

}

function MakeCurrentPoints(points) {
  console.log(points);

  emit('PointsForUser', points); // points is not recieved by the parten node
}

</script>

<template>
  <div class="columns">
    <div class="column kuldvillak-data" v-for="data in kuldvillak_data" :key="data.id">
      <div class="header box">
        <p class="header-text is-text-center my-2 py-2 py-5 is-size-4">{{ data.topic }}</p>
      </div>

      <div class="numbered-cards">
        <div class="numbered-card is-size-2 is-text-center my-2 py-2 py-5"
          :class="{ 'is-answered': isAnswered.includes(question.id) }" v-for="question, index in data.questionsList"
          :key="question.id" @click="() => { showModal(question); MakeCurrentPoints(((index + 1) * 100)) }">
          ${{ (index + 1) * 100 }}
        </div>
      </div>
    </div>
  </div>

  <QuizModal :ModalQuestion="ModalQuestion" :active="isModalActive"
    @questionId="questionId => { isAnswered.push(questionId); }" @isModalActive="e => isModalActive = e">
  </QuizModal>

</template>
<style scoped>
.is-answered {
  background-color: #2f90ff2c !important;

}

.header {
  background-color: #2f90ff;
  font-weight: 600;
  font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  user-select: none;
  color: white;
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