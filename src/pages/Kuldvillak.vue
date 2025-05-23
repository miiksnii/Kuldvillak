<script setup>
import { ref, onMounted, watch } from 'vue';
import DisplayKuldvillak from '../components/DisplayKuldvillak.vue';
import LeaderBoard from '../components/LeaderBoard.vue';

function generateUUID(uniqueSeed) {
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
const kuldvillak_data = ref([]);
onMounted(() => {
  const savedData = sessionStorage.getItem('kuldvillak_data');
  if (savedData) {
    kuldvillak_data.value = JSON.parse(savedData);
  } else {
    kuldvillak_data.value = [
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
    ];
  }
});

// Watch for changes in `kuldvillak_data` and save to sessionStorage
watch(kuldvillak_data, (newData) => {
  sessionStorage.setItem('kuldvillak_data', JSON.stringify(newData));
});

// Function to handle points
function handlePoints(e) {
  pointsToAdd.value = e;
}

// Function to create a new question table
function createNewQuestionTable() {
  const newQuestionTable = {
    id: generateUUID(id++),
    topic: "New Topic",
    questionsList: [
      { id: generateUUID(id++), question: "enter question", answer: "create an answer" },
      { id: generateUUID(id++), question: "enter question", answer: "create an answer" },
      { id: generateUUID(id++), question: "enter question", answer: "create an answer" },
      { id: generateUUID(id++), question: "enter question", answer: "create an answer" },
      { id: generateUUID(id++), question: "enter question", answer: "create an answer" },
    ]
  };
  // Update the data by re-assigning the ref
  kuldvillak_data.value = [...kuldvillak_data.value, newQuestionTable];
}

// Function to delete a table
function removeQuestionTable(givenIndex) {
  kuldvillak_data.value = kuldvillak_data.value.filter((table, index) => index !== givenIndex);
}

// Popup Logic
const isVisible = ref(false);

// Export handler
function handleExport() {
  const data = kuldvillak_data.value;
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);

  const a = document.createElement('a');
  a.href = url;
  a.download = 'kuldvillak_export.json';
  a.click();

  URL.revokeObjectURL(url);
}

// Import handler
function handleImport() {
  const input = document.createElement('input');
  input.type = 'file';
  input.accept = '.json';
  input.onchange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = () => {
      try {
        const imported = JSON.parse(reader.result);
        if (Array.isArray(imported)) {
          kuldvillak_data.value = imported;
        } else {
          alert('Invalid data format.');
        }
      } catch (err) {
        alert('Failed to import JSON.');
      }
    };
    reader.readAsText(file);
  };
  input.click();
}


// 1. find the similar id in kuldvillak_data
// 2. replace the obj with the new question
function updateQuestion(updatedQuestion) {

  console.log(updatedQuestion);

  // Loop through the kuldvillak_data to find the topic and the specific question to update
  kuldvillak_data.value = kuldvillak_data.value.map(table => {
    // Check if this table contains the question by matching the `id`
    if (table.questionsList) {
      table.questionsList = table.questionsList.map(question => {
        // If the question's id matches, replace it with the updated one
        if (question.id === updatedQuestion.id) {
          return updatedQuestion; // Return the updated question
        }
        return question; // Otherwise, keep the current question
      });
    }
    return table; // Return the table with the updated question
  });
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
        @PointsForUser="handlePoints" @removeQuestionTable="(index) => removeQuestionTable(index)"
        @updateQuestion="e => updateQuestion(e)" />
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
    <button class="button is-primary has-text-white" @click="() => handleExport()">Export</button>
    <button class="button is-primary has-text-white" @click="() => handleImport()">Import</button>
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