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
    border: 3px solid  rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    box-shadow: 0 2px rgba(255, 255, 255, 0.3),
                0 2px rgba(204, 204, 204, 0.3) inset;
}

button {
    font-weight: 600;
    font-size: 1rem;
    margin-top: 5px;
    border: 1px solid black;
    border-radius: 5px;
    box-shadow: 0px 6px 0px 0px #301a6b;
    padding: 5px 10px;
    background-color: #fff;
    cursor: pointer;
}

button:hover {
    background-color: #b8a8e6;
}
</style>