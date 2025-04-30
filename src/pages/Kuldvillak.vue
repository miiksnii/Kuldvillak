<script setup>
import { ref } from 'vue';
import DisplayKuldvillak from '../components/DisplayKuldvillak.vue';
import LeaderBoard from '../components/LeaderBoard.vue';

function generateUUID(uniqueSeed) {
  // Ensure uniqueSeed is always a string (can be a timestamp or any changing value)
  const seed = uniqueSeed || new Date().getTime(); // Default to current timestamp if no argument is provided

  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    const r = Math.random() * 16 | 0; // Random number between 0 and 15
    const v = c === 'x' ? r : (r & 0x3 | 0x8); // Set the "y" to be 8, 9, A, or B
    return v.toString(16);
  }) + seed; // Append the uniqueSeed to ensure uniqueness
}



// Playerlist
const players = ref([]);

// Points to add
let pointsToAdd = ref();

// Initialize question data
let id = 1;
const kuldvillak_data = ref([
  {
    id: generateUUID(id++),
    topic: "JavaScript Core",
    questionsList: [
      { id: generateUUID(id++), question: "What does 'this' refer to in a method?", answer: "'this' refers to the object the method is called on." },
      { id: generateUUID(id++), question: "Name a difference between var, let, and const.", answer: "var is function-scoped, let/const are block-scoped." },
      { id: generateUUID(id++), question: "What is hoisting?", answer: "Variable/function declarations are moved to the top of scope." },
      { id: generateUUID(id++), question: "Is JavaScript single-threaded?", answer: "Yes, but async operations use the event loop." },
      { id: generateUUID(id++), question: "What is a closure?", answer: "A function that retains access to its lexical scope." }
    ]
  },
  {
    id: generateUUID(id++),
    topic: "Vue.js",
    questionsList: [
      { id: generateUUID(id++), question: "What is the Composition API?", answer: "An API using setup() to organize logic by feature, not option." },
      { id: generateUUID(id++), question: "How do you pass props to a component?", answer: "By adding props as HTML attributes in parent template." },
      { id: generateUUID(id++), question: "What is a reactive ref?", answer: "A wrapper object that tracks value changes with .value." },
      { id: generateUUID(id++), question: "When does a watcher trigger?", answer: "When its dependency changes." },
      { id: generateUUID(id++), question: "What does v-if do during render?", answer: "It conditionally renders or removes elements from DOM." }
    ]
  },
  {
    id: generateUUID(id++),
    topic: "Rendering Logic",
    questionsList: [
      { id: generateUUID(id++), question: "What triggers a reflow?", answer: "Changes to layout-affecting styles or DOM structure." },
      { id: generateUUID(id++), question: "What is repaint vs reflow?", answer: "Repaint updates visuals; reflow recalculates layout." },
      { id: generateUUID(id++), question: "What is the render tree?", answer: "A structure combining DOM + CSSOM to paint the page." },
      { id: generateUUID(id++), question: "What blocks rendering?", answer: "Synchronous scripts and heavy style recalculations." },
      { id: generateUUID(id++), question: "How does virtual DOM help?", answer: "It batches changes and minimizes direct DOM access." }
    ]
  }
]);

// Function to handle points
function handlePoints(e) {
  pointsToAdd.value = e;
  showPopup();  // Show the popup when points are added
}

// Function to create a new question table
function createNewQuestionTable() {
  const newQuestionTable = {
    id: generateUUID,
    topic: "New Topic",
    questionsList: [
      { id: generateUUID, question: "enter question", answer: "create an answer" },
      { id: generateUUID, question: "enter question", answer: "create an answer" },
      { id: generateUUID, question: "enter question", answer: "create an answer" },
      { id: generateUUID, question: "enter question", answer: "create an answer" },
      { id: generateUUID, question: "enter question", answer: "create an answer" },
    ]
  };

  // Update the data by re-assigning the ref
  kuldvillak_data.value = [...kuldvillak_data.value, newQuestionTable];
}

function removeQuestionTable(givenIndex) {
  console.log(givenIndex);
  kuldvillak_data.value = kuldvillak_data.value.filter((table, index) => index !== givenIndex);
}

// Popup Logic
const isVisible = ref(false);

function showPopup() {
  isVisible.value = true;
  setTimeout(() => {
    isVisible.value = false;
  }, 3000);  // Popup will disappear after 3 seconds
}
</script>


<template>
  <div class="main-window columns is-multiline">
    <!-- Leaderboard section -->
    <div class="column is-one-quarter leaderboard">
      <LeaderBoard :players="players" :pointAmount="pointsToAdd"></LeaderBoard>
    </div>

    <!-- Kuldvillak section -->
    <div class="column" style="height: fit-content;">
      <DisplayKuldvillak :kuldvillak_data="kuldvillak_data" @createNewQuestionTable="createNewQuestionTable"
        @PointsForUser="handlePoints" @removeQuestionTable="(index) => removeQuestionTable(index)" />
    </div>

    <!-- Popup Notification -->
    <div v-if="isVisible" class="popup has-text-centered">
      <div class="notification is-primary">
        <button class="delete" @click="isVisible = false"></button>
        <p>Achievement! {{ pointsToAdd }}</p>
      </div>
    </div>
  </div>

  <!-- Import & Export buttons -->
  <div class="buttons has-text-centered">
      <button class="button is-primary has-text-white">Export</button>
      <button class="button is-primary has-text-white">Import</button>
    </div>
</template>


<style scoped>
.main-window {
  display: inline-flex;
  min-height: 100vh;
  min-width: 90vw;
}

.leaderboard {
  max-width: 13vw;
}

.popup {
  position: fixed;
  bottom: 20px;
  right: 20px;
  z-index: 1000;

}

.notification {
  min-width: 20em;
  min-height: 2em;
  text-align: center;
}
</style>
