<script setup>
import { ref, onMounted } from 'vue'

defineProps({width: String, height: String})

const canvasEl = ref()
onMounted(() => {
    console.log(canvasEl.value)
})

const cfd = new CanvasFreeDrawing({
    elementId: 'cfd',
    width: 500,
    height: 500,
})

cfd.setLineWidth(10)
cfd.setStrokeColor([0, 0, 255])

const clearCanvas = cfd.on({event: 'clear'}, () => {
    clear()
})

const UndoAction = cfd.on({event: 'undo'}, () => {
    Undo()
})

</script>

<template>
    <div>
        <canvas v-ref="canvasEl" id="cfd"></canvas>
        <button @click="UndoAction">Undo</button>
        <button @click="clearCanvas">Clear</button>
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
</style>