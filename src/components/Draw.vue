<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { createDrawingCanvas } from '../services/canvas-service'
import { setDrawing } from '../services/game-api-service'
import { useGameStatus } from '../compositions/game-status'

defineProps({width: String, height: String})

const { round } = useGameStatus()

const canvasEl = ref()
const canvas = ref()

const clearCanvas = () => {
    canvas.value.clear()
}

const undoCanvas = () => {
    canvas.value.undo()
}

onMounted(() => {
    canvas.value = createDrawingCanvas(canvasEl.value)
})

let lastCanvas = ''
const getDrawingInterval = setInterval(() => {
    if (canvasEl.value && lastCanvas !== canvasEl.value.toDataURL()) {
        lastCanvas = canvasEl.value.toDataURL()
        setDrawing(lastCanvas)
    }
}, 1000)

onUnmounted(() => {
    clearInterval(getDrawingInterval)
}) 
</script>

<template>
    <div>
        <p> <span>Draw</span> <span class="word">{{round.word}}</span></p>
        <canvas ref="canvasEl" id="draw-canvas"></canvas>
        <div>
            <button @click="undoCanvas">Undo</button>
            <button @click="clearCanvas">Clear</button>
        </div>
    </div>
</template>

<style scoped>
canvas {
    width: v-bind("$props.width");
    height: v-bind("$props.height");
    border: 3px solid  rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    box-shadow: 0 2px rgba(255, 255, 255, 0.3),
                0 2px rgba(204, 204, 204, 0.3) inset;
}

button {
    margin: 1rem 1rem;
}

p {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
}

span {
    margin-right: 1rem;
}
.word {
    padding: 0.5rem;
    background-color: rgb(231, 231, 231);
    border: 1px solid black;
    box-shadow: 2px 2px,
                inset 2px 2px rgb(255, 255, 255);
    border-radius: 5px;
    transform: rotate(-10deg);
}

.word:hover {
    box-shadow: inset 2px 2px,
                2px 2px rgb(255, 255, 255);
}
</style>