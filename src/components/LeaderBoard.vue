<script setup>
import { reactive, ref, watch, onMounted, nextTick } from 'vue'
import confetti from 'canvas-confetti'

const { players = [], pointAmount = 0 } = defineProps({
  players: { type: Array, default: () => [] },
  pointAmount: { type: Number, default: 0 }
})

const STORAGE_KEY = 'players-points-session'
const PLAYER_COUNTER_KEY = 'player-counter-session'

const localPlayers = reactive([])
const playerCounter = ref(0)

function initializeFromProps() {
  players.forEach((p, i) => {
    localPlayers.push({
      id: i + 1,
      name: p.name,
      points: p.points || 0,
      isEditable: false
    })
  })
  playerCounter.value = players.length
}

function initializeFromSaved(data) {
  data.forEach((p) => {
    localPlayers.push({
      id: p.id != null ? p.id : ++playerCounter.value,
      name: p.name,
      points: p.points,
      isEditable: false
    })
  })
}

// on mount, load from sessionStorage or from props
onMounted(() => {
  const saved = sessionStorage.getItem(STORAGE_KEY)
  const savedCount = sessionStorage.getItem(PLAYER_COUNTER_KEY)

  if (saved) {
    try {
      initializeFromSaved(JSON.parse(saved))
    } catch {
      initializeFromProps()
    }
  } else {
    initializeFromProps()
  }

  if (savedCount) {
    playerCounter.value = Number(savedCount)
  }
})

// persist on any change
watch(
  localPlayers,
  () => {
    sessionStorage.setItem(STORAGE_KEY, JSON.stringify(localPlayers))
    sessionStorage.setItem(PLAYER_COUNTER_KEY, String(playerCounter.value))
  },
  { deep: true }
)

function triggerConfettiAtMouse(event, points) {
  const duration = 1000
  const end = Date.now() + duration
  const defaults = { startVelocity: 20, spread: 90, ticks: 60, zIndex: 10 }

  const interval = setInterval(() => {
    if (Date.now() > end) {
      clearInterval(interval)
    }
    confetti({
      ...defaults,
      particleCount: (points * 2 / 100),
      origin: {
        x: event.clientX / window.innerWidth,
        y: event.clientY / window.innerHeight
      }
    })
  }, 10)
}

function increasePoints(player, event) {
  player.points += pointAmount
  triggerConfettiAtMouse(event, pointAmount)
}

function decreasePoints(player) {
  player.points -= pointAmount
}

function addPlayer() {
  playerCounter.value++
  localPlayers.push({
    id: playerCounter.value,
    name: `Player ${playerCounter.value}`,
    points: 0,
    isEditable: false
  })
}

function removeLastPlayer() {
  if (!localPlayers.length) return

  localPlayers.pop()
  if (!localPlayers.length) {
    playerCounter.value = 0
    sessionStorage.removeItem(PLAYER_COUNTER_KEY)
  }
}

function toggleEdit(index) {
  const p = localPlayers[index]
  const isNowEditable = !p.isEditable
  p.isEditable = isNowEditable

  nextTick(() => {
    const input = document.getElementById(`player-input-${p.id}`)
    if (input) {
      if (isNowEditable) {
        input.focus()
      } else {
        input.blur()
      }
    }
  })
}

function handleEnterKey(index) {
  // Manually blur the input so @blur fires and toggleEdit is triggered
  const input = document.getElementById(`player-input-${localPlayers[index].id}`)
  if (input) input.blur()
}

</script>

<template>
  <div class="container">
    <ol>
      <li class="box" v-for="(player, i) in localPlayers" :key="player.id">
        <div class="player-name">
          <p class="title is-5" v-if="!player.isEditable" @click="toggleEdit(i)">
            {{ player.name }}
          </p>
          <input v-else :id="`player-input-${player.id}`" class="input is-rounded" v-model.trim="player.name"
            minlength="1" maxlength="11" @keydown.enter.prevent="handleEnterKey(i)" @blur="toggleEdit(i)" />
        </div>

        <div class="points-box has-text-centered">
          <p class="subtitle is-6 points-text">{{ player.points }}</p>
        </div>

        <div class="buttons has-text-centered">
          <button class="button is-danger is-rounded" @click="decreasePoints(player)"
            :disabled="pointAmount === 0">-</button>
          <button class="button is-success is-rounded" @click="increasePoints(player, $event)"
            :disabled="pointAmount === 0">+</button>
        </div>
      </li>
    </ol>

    <div class="buttons has-text-centered">
      <button class="button is-danger is-rounded" @click="removeLastPlayer">
        Remove Team
      </button>
      <button class="button is-primary is-rounded" @click="addPlayer">
        Add Team
      </button>
    </div>
  </div>
</template>

<style scoped>


.container {
  max-width: 800px;
  margin: 0 auto;
  flex: auto;
}

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
  cursor: default;
}

.player-name {
  margin-bottom: 10px;
  text-align: center;
}

.points-text {
  font-size: 1.5rem;
  font-weight: 600;
}

.points-box {
  margin-bottom: 10px;
}

.buttons {
  display: flex;
  justify-content: center;
  gap: 10px;
}
</style>
