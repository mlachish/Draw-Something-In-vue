<script setup>
import { useGameStatus } from "../compositions/game-status";

const {me, players} = useGameStatus()
</script>

<template>
    <div class="leaderboard">
        <div class="my-score">
            <p>{{me.name}}</p>
            <p>{{me.points}}</p>
        </div>
        <div class="players">
            <div 
                v-for="player in players" 
                :key="player.id" 
                :class="{'no-points': !player.points, 'player-score': true}"
            >
                <p>{{player.name}}</p>
                <p>{{player.points}}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .no-points {
        color: black;
        font-weight: bold;
    }
</style>