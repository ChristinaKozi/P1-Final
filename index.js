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
    document.addEventListener('keydown', (event)=>{
        if (event.key === 'ArrowRight' && jokesData) {
            if (currentIndex < jokesData.length) {
                jokesData.forEach((joke, index) => {
                    if (index === currentIndex){
                        console.log(joke.setup)
                        let p = document.createElement('p')
                        p.textContent = joke.setup
                        let label = document.querySelector('#joke-header')
                        label.appendChild(p)
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

