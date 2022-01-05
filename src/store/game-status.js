import { reactive, ref, watch } from 'vue'
import { defineStore } from 'pinia'

export const useGameStatusStore = defineStore('gameStatus', () => {
    const me = reactive({id: null, name: null, points: null})
    const players = ref([])
    const round = ref({})

    // watch(() => round.value.word, () => alert(''))

    return { me, players, round }
})