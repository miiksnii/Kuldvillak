<script setup>
import { reactive, ref, watch } from 'vue';

const props = defineProps(['players', 'pointAmount']);
const STORAGE_KEY = 'players-points';

const savedData = localStorage.getItem(STORAGE_KEY);
const initialPlayers = savedData
  ? JSON.parse(savedData)
  : props.players.map(player => ({ ...player }));

const localPlayers = reactive(initialPlayers);

function increasePoints(player, pointAmount) {
  player.points += pointAmount;
}

function decreasePoints(player, pointAmount) {
  player.points -= pointAmount;
}

watch(
  () => localPlayers,
  (newVal) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newVal));
  },
  { deep: true }
);
</script>

<template>
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
</style>
