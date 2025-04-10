<script setup>

import { ref, reactive } from 'vue';
import DisplayKuldvillak from '../components/DisplayKuldvillak.vue';
import LeaderBoard from '../components/LeaderBoard.vue';




const players = ref([
  { name: "Kaspar", points: 0, },
  { name: "Tauri", points: 0, },
  { name: "Martin", points: 0, },
  { name: "Kaupo", points: 0, },
]);

let pointsToAdd = ref();

let id = 1;
// max topic length is 23 chars without newline.
const kuldvillak_data = ref([
  {
    id: id++,
    topic: "JavaScript Core",
    questionsList: [
      { id: id++, question: "What does 'this' refer to in a method?", answer: "'this' refers to the object the method is called on." },
      { id: id++, question: "Name a difference between var, let, and const.", answer: "var is function-scoped, let/const are block-scoped." },
      { id: id++, question: "What is hoisting?", answer: "Variable/function declarations are moved to the top of scope." },
      { id: id++, question: "Is JavaScript single-threaded?", answer: "Yes, but async operations use the event loop." },
      { id: id++, question: "What is a closure?", answer: "A function that retains access to its lexical scope." }
    ]
  },
  {
    id: id++,
    topic: "Vue.js",
    questionsList: [
      { id: id++, question: "What is the Composition API?", answer: "An API using setup() to organize logic by feature, not option." },
      { id: id++, question: "How do you pass props to a component?", answer: "By adding props as HTML attributes in parent template." },
      { id: id++, question: "What is a reactive ref?", answer: "A wrapper object that tracks value changes with .value." },
      { id: id++, question: "When does a watcher trigger?", answer: "When its dependency changes." },
      { id: id++, question: "What does v-if do during render?", answer: "It conditionally renders or removes elements from DOM." }
    ]
  },
  {
    id: id++,
    topic: "Rendering Logic",
    questionsList: [
      { id: id++, question: "What triggers a reflow?", answer: "Changes to layout-affecting styles or DOM structure." },
      { id: id++, question: "What is repaint vs reflow?", answer: "Repaint updates visuals; reflow recalculates layout." },
      { id: id++, question: "What is the render tree?", answer: "A structure combining DOM + CSSOM to paint the page." },
      { id: id++, question: "What blocks rendering?", answer: "Synchronous scripts and heavy style recalculations." },
      { id: id++, question: "How does virtual DOM help?", answer: "It batches changes and minimizes direct DOM access." }
    ]
  }
]);

function handlePoints(e) {
  pointsToAdd.value = e;
}


</script>


<template>
  <div class="main-window columns is-multiline">

    <div class="column is-one-quarter leaderboard">
      <LeaderBoard :players="players" :pointAmount="pointsToAdd"></LeaderBoard>
    </div>

    <div class="column">
      <DisplayKuldvillak :kuldvillak_data="kuldvillak_data" @PointsForUser="e => handlePoints(e)"></DisplayKuldvillak>
    </div>
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
</style>
