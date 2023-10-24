document.addEventListener('DOMContentLoaded', ()=>{
    getJokes()
    keyPressed()
    iterateJokeSetup()
})

function getJokes() {
    return fetch('http://localhost:3000/jokes')
    .then(res => res.json())
    .then(data => data)
}

function keyPressed(){
    let jokesData
    let currentIndex = 0
    getJokes().then(data => {
        jokesData = data
        console.log(jokesData)
        })
    let p = document.createElement('p')
    let label = document.querySelector('#joke-header')
    label.appendChild(p)

    document.addEventListener('keydown', (event)=>{
        if (event.key === 'ArrowRight' && jokesData) {
            if (currentIndex < jokesData.length) {
                jokesData.forEach((joke, index) => {
                    if (index === currentIndex){
                        console.log(joke.setup)
                        p.textContent = joke.setup
                        }
                });
                currentIndex++
            }
        }
    })
}

function iterateJokeSetup() {
    fetch('http://localhost:3000/jokes')
    .then(res => res.json())
    .then(data => data)
}

