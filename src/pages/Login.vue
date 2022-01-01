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
            <input type="text" placeholder="Rick Sanchez" v-model="player">
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

.login-input input {
    font-size: 1.5rem;
    background-color: rgba(255,255,255,.3);
    padding: 10px;
    border: 2px solid rgba(255,255,255,.7);
    border-radius: 5px;
    margin-bottom: 1rem;
}

.login-input input:focus {
    background-color: rgba(255,255,255,.2)
}

.login-input button {
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
.login-input button:hover {
    background-color: #b8a8e6;
}
</style>