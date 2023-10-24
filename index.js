document.addEventListener('DOMContentLoaded', ()=>{
    getJokes()
    iterateJokeSetup()
})

function getJokes() {
    fetch('http://localhost:3000/jokes')
    .then(res => res.json())
    .then(data => {console.log(data)})
}

function iterateJokeSetup() {
    fetch('http://localhost:3000/jokes')
    .then(res => res.json())
    .then(data => {
        data.map(joke => console.log(joke.setup))
    })
}

