import { onUnmounted, ref } from 'vue'
import { getDrawing } from '../services/game-api-service'

export function useGameDrawing() {
    const draw = ref('')

    const loadDrawing = async() => {
        const data = await getDrawing(localStorage.token)
        draw.value = data.draw
    }
    loadDrawing(localStorage.token)
    
    const getDrawingInterval = setInterval(loadDrawing, 1000)
    
    onUnmounted(() => {
        clearInterval(getDrawingInterval)
    })

    return draw
}