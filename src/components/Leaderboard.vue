<script setup>
import { useGameStatus } from "../compositions/game-status";

const {me, players} = useGameStatus()
</script>

<template>
    <div class="leaderboard">
        <div class="players">
            <div 
                v-for="player in players" 
                :key="player.id" 
                :class="{'no-points': !player.points, 'player-score': true, 'my-score': player.id === me.id}"
            >
                <p>{{player.name}}</p>
                <p>{{player.points}}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.leaderboard {
    margin: 1rem 1rem;
}

.no-points {
    color: black;
    font-weight: bold;
}

.my-score {
    padding: 0.5rem;
    border: 1px solid black;
    border-radius: 5px;
}
</style>