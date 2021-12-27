<script setup>
import { ref } from "@vue/reactivity";
import { useRouter } from "vue-router";

const player = ref('')
const router = useRouter()
const login = () => {
    localStorage.setItem("isLoggedIn", 1)
    alert(player.value + " " + "logged in")
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
    background-color: #fff;
    border: 1px solid #aaa;
    border-radius: 5px;
    box-shadow: 2px 2px #ccc;
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