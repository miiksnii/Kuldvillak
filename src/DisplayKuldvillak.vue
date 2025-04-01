


<script setup>


let id = 1; // Initialize counter

const kuldvillak_data = [
  {
    id: id++,
    topic: "About Kaspar Bergert", 
    questionsList: [
      { id: id++, text: "What is Kaspar's favorite programming language?", points: 100 },
      { id: id++, text: "How many years has Kaspar been coding?", points: 200 },
      { id: id++, text: "What framework does Kaspar specialize in?", points: 300 },
      { id: id++, text: "What's Kaspar's strongest technical skill?", points: 400 },
      { id: id++, text: "What type of projects does Kaspar enjoy most?", points: 500 }
    ]
  },
  { 
    id: id++,
    topic: "About Martin Pruus",
    questionsList: [
      { id: id++, text: "What is Martin's professional role?", points: 100 },
      { id: id++, text: "What industry does Martin work in?", points: 200 },
      { id: id++, text: "What's Martin's favorite productivity tool?", points: 300 },
      { id: id++, text: "How does Martin approach problem-solving?", points: 400 },
      { id: id++, text: "What's Martin's leadership style?", points: 500 }
    ]
  }
];

</script>

<template>
  <div class="columns is-variable ">
    <div class="column is-half " v-for="item in kuldvillak_data" :key="item.id">
      <div class="card card-div" style="height: 100%;">
        <div class="card-content has-text-center">      
          <!-- Topic -->
          <div class="topic-div ">
            <h2 class="title is-5 mb-4 is-size-1">{{ item.topic }}</h2>
          </div>
          <!-- Questions List -->
          <div class="question-item mb-2 py-3 my-6" v-for="(question, index) in item.questionsList" :key="index">
            <button class="btn is-primary is-size-1">{{ (index+1)*100 }}</button> 
            <!-- Todo: create a modal that shows the question. when a button is pressed the right answer shows.-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

.topic-div {  
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  
}

.question-item {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  cursor: pointer;
  user-select: none; /* kõrvaldab text selectioni */
  
  /* Single transition declaration */
  transition: 
    transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.1),
    background-color 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.1),
    box-shadow 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.1),
    color 0.1s ease-out; /* Color changes faster! */
  
  /* Gradient background with subtle texture */
  background: linear-gradient(145deg, #022599, rgb(0, 110, 255));
  color: #1a1a1a;
  
  /* Sophisticated shadow */
  box-shadow:
    0 2px 4px rgba(0,0,0,0.05),
    0 4px 8px rgba(0,0,0,0.05);
  
  /* Border with gradient */
  border: 1px solid rgba(145, 180, 255, 0.2);
  color:white
}

/* Hover state */
.question-item:hover {
  transform: translateY(-6px) scale(1.02);
  background: linear-gradient(145deg, #d7dfff, rgb(72, 151, 255));
  box-shadow:
    0 6px 12px rgba(0,0,0,0.1),
    0 8px 16px rgba(0,0,0,0.08);
  color: black;
}

/* Active/pressed state */
.question-item:active {
  transform: translateY(0px) scale(1.02);
  transition-duration: 0.1s;
  box-shadow:
    0 3px 6px rgba(0,0,0,0.1),
    0 4px 8px rgba(0,0,0,0.08);
}

/* Focus state for accessibility */
.question-item:focus {
  outline: 2px solid rgba(0, 102, 255, 0.5);
  outline-offset: 2px;
}

.card-div {
  background-color: #060053;
}

</style>