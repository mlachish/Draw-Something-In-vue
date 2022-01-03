export function start(player) {
    return fetch('https://draw-something-demo.herokuapp.com/api/start', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            player
        })
    }).then(res => res.json())
}

export function getStatus(token) {
    return fetch('https://draw-something-demo.herokuapp.com/api/status', {
        headers: {
            'token': token
        }
    }).then(res => res.json())
}

export function getDrawing(token) {
    return fetch('https://draw-something-demo.herokuapp.com/api/drawing', {
        headers: {
            'token': token
        }
    }).then(res => res.json())
}

export function setDrawing(draw, token) {
    return fetch('https://draw-something-demo.herokuapp.com/api/drawing', {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'token': token
        },
        body: JSON.stringify({
            draw
        })
    })
}

export function guessWord(word, token) {
    return fetch('https://draw-something-demo.herokuapp.com/api/word', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'token': token
        },
        body: JSON.stringify({
            word
        })
    }).then(res => res.status === 200)
}