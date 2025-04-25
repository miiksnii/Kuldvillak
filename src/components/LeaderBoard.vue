<script setup>
import { reactive, ref, watch } from 'vue';
import confetti from 'canvas-confetti';  // Importing the confetti package

const props = defineProps(['players', 'pointAmount']);
const STORAGE_KEY = 'players-points-session';
const PLAYER_COUNTER_KEY = 'player-counter-session';

const savedData = sessionStorage.getItem(STORAGE_KEY);
const savedCounter = sessionStorage.getItem(PLAYER_COUNTER_KEY);

const initialPlayers = savedData
  ? JSON.parse(savedData)
  : props.players.map(player => ({ ...player, isEditable: false }));

const localPlayers = reactive(initialPlayers);
const playerCounter = ref(savedCounter ? Number(savedCounter) : initialPlayers.length);



function triggerConfettiAtMouse(event, points) {
  const duration = points;
  const animationEnd = Date.now() + duration;
  const defaults = {
    startVelocity: 20,
    spread: 90,
    ticks: 900,
    zIndex: 10,
  };

  const mouseX = event.clientX;
  const mouseY = event.clientY;

  const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now();
    if (timeLeft <= 0) {
      clearInterval(interval);
    }
    confetti(Object.assign({}, defaults, {
      particleCount: (points / 100) * points / 100,
      origin: { x: mouseX / window.innerWidth, y: mouseY / window.innerHeight }
    }));
  }, (points / 10));
}

function increasePoints(player, pointAmount, event) {
  player.points += pointAmount;
  triggerConfettiAtMouse(event, pointAmount);
  savePlayersToSession();
}

function decreasePoints(player, pointAmount) {
  player.points -= pointAmount;
  savePlayersToSession();
}

function addPlayer() {
  playerCounter.value++;
  const newPlayer = { name: `Player ${playerCounter.value}`, points: 0, isEditable: false };
  localPlayers.push(newPlayer);
  savePlayersToSession();
  sessionStorage.setItem(PLAYER_COUNTER_KEY, playerCounter.value.toString());
}

function removeLastPlayer() {
  if (localPlayers.length > 0) {
    localPlayers.pop();
    savePlayersToSession();
  }

  if (localPlayers.length === 0) {
    playerCounter.value = 0;
    sessionStorage.removeItem(PLAYER_COUNTER_KEY);
  }
}

function savePlayersToSession() {
  sessionStorage.setItem(STORAGE_KEY, JSON.stringify(localPlayers));
}

watch(
  () => localPlayers,
  () => {
    savePlayersToSession();
  },
  { deep: true }
);

function toggleEdit(index) {
  localPlayers[index].isEditable = !localPlayers[index].isEditable;
}

function savePlayerName(index, event) {
  const playerName = document.querySelector(".playerName");
  const minLength = parseInt(playerName.getAttribute("minlength"));

  if (playerName.value.length >= minLength) {
    localPlayers[index].name = event.target.value;
    localPlayers[index].isEditable = false;
    event.target.blur();
  } else {
    console.log("Min length is 1 chars");
  }
}



</script>

<template>
  <div class="container">
    <ol>
      <li class="box" v-for="(player, index) in localPlayers" :key="player.name">
        <div class="player-name">
          <p class="title is-5" v-if="!player.isEditable" @click="toggleEdit(index)">{{ player.name }}</p>
          <input class="playerName input is-rounded" minlength="1" maxlength="11" v-if="player.isEditable"
            :value="player.name" @keydown.enter="savePlayerName(index, $event)" />
        </div>

        <div class="points-box has-text-centered">
          <p class="subtitle is-6 points-text">{{ player.points }}</p>
        </div>

        <div class="buttons has-text-centered">
          <button class="button is-danger is-rounded"
            @click="decreasePoints(player, props.pointAmount ? props.pointAmount : 0)">-</button>
          <button class="button is-success is-rounded"
            @click="increasePoints(player, props.pointAmount ? props.pointAmount : 0, $event)">+</button>
        </div>
      </li>
    </ol>

    <div class="buttons has-text-centered">
      <button class="button is-danger is-rounded" @click="removeLastPlayer">Remove Team</button>
      <button class="button is-primary is-rounded" @click="addPlayer">Add Team</button>
    </div>
  </div>
</template>

<style scoped>
/* General Container */
.container {
  max-width: 800px;
  margin: 0 auto;
}

/* Player Box */
.box {
  padding: 1rem;
  margin: 0.5rem 0;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fbfeff;
  color: black;
  font-weight: bolder;
  font-size: larger;
}

/* Player Name */
.player-name {
  margin-bottom: 10px;
  text-align: center;
}

.points-text {
  font-size: 1.5rem;
  font-weight: 600;
}

/* Points Box */
.points-box {
  margin-bottom: 10px;
}

/* Buttons Container */
.buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
}

/* Button Styling */
.button {
  padding: 8px 12px;
  margin-left: 15px;
  margin-right: 15px;
  background-color: #2ca0ffbd;
  color: rgb(255, 255, 255);
  font-size: 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.button-add {
  background-color: #4caf50;
}

.button-remove {
  background-color: #f44336;
}

/* Player Box Button Styling */
.box button {
  margin: 0 0.25rem;
  padding: 0.5rem 1.5rem;
  border-radius: 4px;
  background-color: #2ca0ffbd;
  color: rgb(255, 255, 255);
  font-weight: 900;
  cursor: pointer;
}

/* Button Width Consistency */
.button {
  min-width: 80px;
}
</style>
