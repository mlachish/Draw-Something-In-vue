<script setup>
import { useGameStatus } from "../compositions/game-status";

const {me, players} = useGameStatus()
</script>

<template>
    <div class="leaderboard">
        <p>Leaderboard</p>
        <div class="players">
            <div 
                v-for="player in players" 
                :key="player.id" 
                :class="{'no-points': !player.points, 'player-score': true, 'my-score': player.id === me.id}"
            >
                <p>{{player.name}}</p>
                <p class="points">{{player.points}}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.leaderboard {
    margin: 1rem 2rem;
}

.no-points {
    color: black;
    font-weight: bold;
}

.my-score {
    padding: 0.5rem;
    font-size: 1.5rem;
    border: 2px solid black;
    box-shadow: 2px 2px rgba(0, 0, 0, 0.3),
                inset 2px 2px rgba(255, 255, 255, 0.3);
    border-radius: 5px;
}

.my-score .points {
    font-size: 2rem;
}
</style>