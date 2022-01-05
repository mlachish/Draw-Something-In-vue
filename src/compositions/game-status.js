import { onUnmounted } from 'vue'
import { storeToRefs } from 'pinia'

import { getStatus } from '../services/game-api-service'
import { useGameStatusStore } from '../store/game-status'

export function initGameStatus() {
    const store = useGameStatusStore()

    const loadStatus = async() => {
        const data = await getStatus(localStorage.token) 
        Object.assign(store.me, data.me)
        store.players = data.players
        store.round = data.round
    }
    loadStatus(localStorage.token)
    
    const getStatusInterval = setInterval(loadStatus, 2000)
    
    onUnmounted(() => {
        clearInterval(getStatusInterval)
    })    
}

export function useGameStatus() {
    const { me, players, round } = storeToRefs(useGameStatusStore())
    return { me, players, round }
}