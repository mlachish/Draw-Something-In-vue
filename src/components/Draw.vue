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

</style>