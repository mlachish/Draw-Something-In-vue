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
    return isDrawer.value ? 'me!' : (round.value.drawer?.name || 'Unknown')
}) 

</script>

<template>
    <div class="game">
        <div>
            <p>{{drawerName}} is drawing</p>
        </div>
        <div>
            <Draw v-if="isDrawer"/>
            <Guess v-else/>
        </div>
    </div>
</template>

<style scoped>

</style>