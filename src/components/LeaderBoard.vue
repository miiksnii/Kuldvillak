<script setup>
import { reactive, ref, watch } from 'vue';

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

function increasePoints(player, pointAmount) {
  player.points += pointAmount;
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
  // Save the new name when "Enter" is pressed and exit edit mode
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
  <div>
    <ol>
      <li class="box" v-for="(player, index) in localPlayers" :key="player.name">
        <!-- Show <p> if not editable, otherwise show <input> -->
        <p v-if="!player.isEditable" @click="toggleEdit(index)">{{ player.name }}</p>
        <input class="playerName" minlength="1" maxlength="11" v-if="player.isEditable" :value="player.name"
          @keydown.enter="savePlayerName(index, $event)" />

        <div>{{ player.points }}</div>
        <div>
          <button class="button button-remove"
            @click="decreasePoints(player, props.pointAmount ? props.pointAmount : 0)">-</button>
          <button class="button button-add"
            @click="increasePoints(player, props.pointAmount ? props.pointAmount : 0)">+</button>
        </div>
      </li>
    </ol>
    <div>
      <button class="button button-remove" @click="removeLastPlayer">Remove Team</button>
      <button class="button button-add" @click="addPlayer">Add Team</button>
    </div>
  </div>
</template>


<style scoped>
.box {
  padding: 1rem;
  margin: 0.5rem 0;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fbfeff;
  color: black;
  font-weight: bolder;
  font-size: larger;
}

.box button {
  margin: 0 0.25rem;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 4px;
  background-color: #2ca0ffbd;
  color: rgb(255, 255, 255);
  font-weight: 900;
  font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  cursor: pointer;
}

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

.button-add:hover {
  background-color: #4caf50;
}

.button-remove:hover {
  background-color: #f44336;
}
</style>
