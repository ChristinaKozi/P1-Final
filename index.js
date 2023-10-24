document.addEventListener('DOMContentLoaded', ()=>{
    let jokesData
    getJokes().then(data => {
        jokesData = data
        logFirstJoke(jokesData)
        keyPressed(jokesData)
    })
})

function getJokes() {
    return fetch('http://localhost:3000/jokes')
    .then(res => res.json())
    .then(data => data)
}

function logFirstJoke(jokesData){
    let h2 = document.createElement('h2')
    let label = document.querySelector('#joke-header')
    h2.textContent = jokesData[0].setup
    label.appendChild(h2)
    console.log(jokesData[0].punchline)
}

function keyPressed(jokesData){
    let currentIndex = 1
    let h2 = document.querySelector('h2')
    document.addEventListener('keydown', (event)=>{
        if (event.key === 'ArrowRight' && jokesData) {
            if (currentIndex < jokesData.length) {
                jokesData.forEach((joke, index) => {
                    if (index === currentIndex){
                        h2.textContent = joke.setup
                        const punchline = joke.punchline
                        handleSubmit(punchline)
                    }
                });
                currentIndex++
            }
        }
    })
}

function handleSubmit(punchline){
    const form = document.querySelector("#form")
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        checkInput(punchline)
    })
}

function checkInput(punchline){
    let userPunchline = document.querySelector('input#punchline').value
    if (userPunchline.toLowerCase() === punchline.toLowerCase()){
        console.log('yes')
        const form = document.querySelector('#form')
        const congratsMessage = document.createElement('p')
        congratsMessage.textContent = 'You got it!'
        form.appendChild(congratsMessage)
    }
}