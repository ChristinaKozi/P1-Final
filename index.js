document.addEventListener('DOMContentLoaded', ()=>{
    getJokes()
    keyPressed()
    iterateJokeSetup()
})

function getJokes() {
    fetch('http://localhost:3000/jokes')
    .then(res => res.json())
    .then(data => {console.log(data)})
}

function keyPressed(){
    document.addEventListener('keydown', (event)=>{
        if (event.key === 'ArrowRight') {
            console.log('right')
        }
    })
}

function iterateJokeSetup() {
    fetch('http://localhost:3000/jokes')
    .then(res => res.json())
    .then(data => {
        data.map(joke => {
            const setup = joke.setup
            let p = document.createElement('p')
            p.textContent = setup
            let label = document.querySelector('#joke-header')
            label.appendChild(p)
        })
    })
}

