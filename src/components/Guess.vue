<script setup>
import { ref } from 'vue'
import { useGameDrawing } from '../compositions/game-drawing'
import { guessWord } from '../services/game-api-service'

defineProps({width: String, height: String})

const src = useGameDrawing()
const word = ref('')

const submit = async () => {
    const hasWon = await guessWord(word.value, localStorage.token)
    if (hasWon) {
        alert('You are correct!')
    } else {
        alert('Try Again')
        word.value = ''
    }
}
</script>

<template>
    <div>
        <img :src="src">
    </div>
    <form @submit.prevent="submit">
        <input type="text" placeholder="Guess the word" v-model="word">
        <button>Guess</button>
    </form>
</template>

<style scoped>
img {
    width: v-bind("$props.width");
    height: v-bind("$props.height");
}
</style>