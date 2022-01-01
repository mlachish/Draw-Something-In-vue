<script setup>
import { ref,onMounted } from 'vue'

defineProps({width: String, height: String})

const canvasEl = ref()
onMounted(() => {
    console.log(canvasEl.value)
})
</script>

<template>
    <div>
        <canvas v-ref="canvasEl"></canvas>
    </div>
</template>

<style scoped>
    canvas {
        border: 3px solid  rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    box-shadow: 0 2px rgba(255, 255, 255, 0.3),
                0 2px rgba(204, 204, 204, 0.3) inset;
    }
</style>