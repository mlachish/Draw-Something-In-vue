import {createRouter, createWebHistory} from 'vue-router'

import GameScreen from './pages/GameScreen.vue'
import Login from './pages/Login.vue'
import Leaderboard from './pages/Leaderboard.vue'
import Authenticated from './pages/Authenticated.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        { path: '/', component: Authenticated, children: [
            { name: 'game', path: '', component: GameScreen },
            { name: 'leaderboard', path: '/leaderboard', component: Leaderboard }
        ]},
        { name: 'login', path: '/login', component: Login },
    ]
})

export default router