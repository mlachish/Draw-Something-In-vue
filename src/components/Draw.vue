<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { createDrawingCanvas } from '../services/canvas-service'
import { setDrawing } from '../services/game-api-service'
import { useGameStatus } from '../compositions/game-status'

defineProps({width: String, height: String})

const {round} = useGameStatus()

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
        <p>Draw {{round.word}}</p>
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
    margin: 0 1rem;
}
</style>