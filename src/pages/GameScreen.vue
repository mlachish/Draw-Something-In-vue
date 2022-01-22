<script setup>
import { computed } from 'vue'

import { useGameStatus } from '../compositions/game-status';
import Draw from '../components/Draw.vue'
import Guess from '../components/Guess.vue'

const { round } = useGameStatus()
const isDrawer = computed(() => {
    return !!round.value.word
})
const drawerName = computed(() => {
    return isDrawer.value ? 'You are' : (round.value.drawer?.name + ' is' || 'Unknown is')
}) 
const width = '500px'
const height = '500px'

</script>

<template>
    <div class="game">
        <h2>Draw Something In Vue!</h2>
        <div>
            <p>{{drawerName}} drawing</p>
        </div>
        <div>
            <Draw v-if="isDrawer" :width="width" :height="height"/>
            <Guess v-else :width="width" :height="height"/>
        </div>
    </div>
</template>

<style scoped>
h2 { 
    position: absolute;
    top: 1rem;
    left: 2rem;
}

p {
    font-weight: bold;
}
</style>