import { onUnmounted, ref } from 'vue'
import { getDrawing } from '../services/game-api-service'

const defaultSrc = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAUcAAACaCAMAAAANQHocAAAAA1BMVEX///+nxBvIAAAAR0lEQVR4nO3BAQ0AAADCoPdPbQ8HFAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPBixVAAASBb17YAAAAASUVORK5CYII='

export function useGameDrawing() {
    const draw = ref('')

    const loadDrawing = async() => {
        const data = await getDrawing(localStorage.token)
        draw.value = data.draw || defaultSrc
    }
    loadDrawing(localStorage.token)
    
    const getDrawingInterval = setInterval(loadDrawing, 1000)
    
    onUnmounted(() => {
        clearInterval(getDrawingInterval)
    })

    return draw
}