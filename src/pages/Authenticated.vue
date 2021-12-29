<script setup>
import { useRouter } from 'vue-router';
import { initGameStatus } from '../compositions/game-status';

import Leaderboard from '../components/Leaderboard.vue';

const isLoggedIn = !!localStorage.getItem("token")
if (isLoggedIn) {
    initGameStatus()
} else {
    useRouter().push({name: 'login'})
}
</script>

<template>
    <router-view class="main"/>
    <Leaderboard class="side"/>
</template>

<style scoped>
    .main {
        flex: 1; 
    }

    .side {
        flex: 0;
    }
</style>
