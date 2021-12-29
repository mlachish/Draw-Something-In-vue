<script setup>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { start } from '../services/game-api-service'

const player = ref('')
const router = useRouter()
const login = async() => {
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

form.login-input {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.login-input input {
    padding: 10px;
    border-radius: 5px;
    box-shadow: 2px 2px #bbb;
    transition: box-shadow 200ms linear;
}

.login-input input:hover {
    box-shadow: 2px 2px rgb(138, 136, 136);
}

.login-input button {
    margin-top: 5px;
    border: 1px solid black;
    border-radius: 5px;
    box-shadow: 2px 2px #bbb;
    padding: 5px 10px;
    background-color: rgb(165, 226, 250);
}
</style>