<script setup>
import { reactive, ref, watch } from 'vue';

const props = defineProps(['players', 'pointAmount']);
const STORAGE_KEY = 'players-points-session'; 

const savedData = sessionStorage.getItem(STORAGE_KEY);
const initialPlayers = savedData
  ? JSON.parse(savedData) 
  : props.players.map(player => ({ ...player }));

const localPlayers = reactive(initialPlayers);

let playerCount = ref(localPlayers.length);

function increasePoints(player, pointAmount) {
  player.points += pointAmount;
  savePlayersToSession();
}

function decreasePoints(player, pointAmount) {
  player.points -= pointAmount;
  savePlayersToSession();
}

function addPlayer() {
  playerCount.value++;
  const newPlayer = { name: `Player ${playerCount.value}`, points: 0 };
  localPlayers.push(newPlayer);
  savePlayersToSession();
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
</script>

<template>
  <div>
    <ol>
      <li class="box" v-for="player in localPlayers" :key="player.name">
        <div>{{ player.name }}</div>
        <div>{{ player.points }}</div>
        <div>
          <button @click="decreasePoints(player, props.pointAmount ? props.pointAmount : 0)">-</button>
          <button @click="increasePoints(player, props.pointAmount ? props.pointAmount : 0)">+</button>
        </div>
      </li>
    </ol>
    <div>
      <button class="button" @click="addPlayer">Add Team</button>
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

.box button:hover {
  background-color: #2f90ff;
}

button {
  padding: 8px 12px;
  background-color: #2ca0ffbd;
  color: rgb(0, 0, 0);
  font-size: 16px;
  border: none;
}

.button:hover {
  background-color: #6bff58;
}
</style>
