<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { start } from '../services/game-api-service'

const player = ref('')
const router = useRouter()
const login = async () => {
    const data = await start(player.value)
    localStorage.setItem('token', data.token)
    router.push({name: 'game'})
}
</script>

<template>
    <div class="login">
        <h1>Draw Something In Vue!</h1>
        <form class="login-input" @submit.prevent="login">
            <p>Enter your name:</p>
            <input type="text" placeholder="Nickname" v-model="player">
            <button>Let's Play!</button>
        </form>
    </div>
</template>

<style scoped>
.login {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    border: 3px solid  rgba(0, 0, 0, 0.2);
    border-radius: 5px;
    box-shadow: 0 2px rgba(255, 255, 255, 0.3),
                0 2px rgba(204, 204, 204, 0.3) inset;
    width: 80%;
    max-width: 600px;
    min-height: 70vh;
    padding: 2vh 2vw;
}

h1 { 
    font-size: 3rem;
}

p { 
    font-size: 1.5rem;
}

form.login-input {
    display: flex;
    flex-direction: column;
    align-items: center;
}
</style>