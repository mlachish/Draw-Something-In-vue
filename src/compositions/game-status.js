import { onUnmounted, ref } from 'vue'
import { getStatus } from '../services/game-api-service'

const me = ref({})
const players = ref([])
const round = ref({})

export function initGameStatus() {
    const loadStatus = async() => {
        const data = await getStatus(localStorage.token) 
        me.value = data.me
        players.value = data.players
        round.value = data.round
    }
    loadStatus(localStorage.token)
    
    const getStatusInterval = setInterval(loadStatus, 2000)
    
    onUnmounted(() => {
        clearInterval(getStatusInterval)
    })    
}

export function useGameStatus() {
    return {me, players, round}
}