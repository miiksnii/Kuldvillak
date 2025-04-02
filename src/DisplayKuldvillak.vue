


<script setup>


let id = 1; // Initialize counter

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

function showModal(question){

}
</script>

<template>

    <div class="columns">

    <div class="column" v-for="data in kuldvillak_data" :key="data.id">
      <div class="header box">
        <p class="header-text has-text-centered is-size-3">Hello I am Kaspar Bergert</p>
      </div>

      <div class="numbered-cards">
        <!-- when the card is clicked shows a modal window -->
        <div class="numbered-card is-size-4 is-text-center my-5 py-2 py-2" v-for="question,index in data.questionsList" :key="question.id" @click="showModal(data)">          
          ${{(index + 1)*100}}
        </div>
      </div>

    </div>    

  </div>
</template>
<style scoped>
  .header {
    background-color: #003380;
  }

  .numbered-card {
   background-color: #003E9A;
   border-radius: 5px;
   text-align: center; 
   cursor: pointer;
    user-select: none;  
    transition: transform 0.2s cubic-bezier(0.1, 3, 0.9, 1);
  }

  .numbered-card:hover {
    background-color: #315a97;
    transform: scale(1.05);
  }

</style>