<script setup>

const props = defineProps(['players']);



function increasePoints(player) {
  player.points +=  100;
}

function decreasePoints(player) {
  player.points -= 100;
}

</script>

<template>
  <slot></slot>

  <!--
    <div class="bottom-container" style="transform: scale(0.75)">
      <div class="name-box" v-for="player in players" :key="player.name">
        <div>{{ player.name }}</div>
        <div class="points-box">
          {{ player.points }}
        </div>
        <div class="buttons">
          <button @click="decreasePoints(player)">-</button>
          <button @click="increasePoints(player)">+</button>
         </div>
      </div>
    </div>
  -->
  <ol>
    <li class="box" v-for="player in players" :key="player.name">
      <div>{{ player.name }}</div>
      <div>{{ player.points }}</div>
      <div>
        <button @click="decreasePoints(player)">-</button>
        <button @click="increasePoints(player)">+</button>
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
  font-size:larger;
}

.box button {
  margin: 0 0.25rem;
  padding: 0.5rem 1.5rem;
  border: none;
  border-radius: 4px;
  background-color: #2ca0ffbd;
  color: rgb(255, 255, 255);
  font-weight: 900;
  font-family:Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  cursor: pointer;
}

.box button:hover {
  background-color: #2f90ff;
}
</style>
