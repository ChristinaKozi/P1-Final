document.addEventListener('DOMContentLoaded', ()=>{
    let jokesData
    getJokes().then(data => {
        jokesData = data
        keyPressed(jokesData)
    })
})

function getJokes() {
    return fetch('http://localhost:3000/jokes')
    .then(res => res.json())
    .then(data => data)
}

function keyPressed(jokesData){
    let currentIndex = 0
    let h2 = document.createElement('h2')
    let label = document.querySelector('#joke-header')
    label.appendChild(h2)
    document.addEventListener('keydown', (event)=>{
        if (event.key === 'ArrowRight' && jokesData) {
            if (currentIndex < jokesData.length-1) {
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

function handleSubmit(punchline){ ''
    const form = document.querySelector("#form")
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        checkInput(punchline)
    })
}

function checkInput(punchline){
    let userPunchline = document.querySelector('input#punchline').value
    let alteredPunchline = punchline.toLowerCase().slice(0,-1)
    const form = document.querySelector('#form')
    let message = form.querySelector('p')
    if (message === null || message === undefined){
        message = document.createElement('p')
        form.appendChild(message)
    }
    if (userPunchline.toLowerCase() === alteredPunchline){
        message.textContent = 'You got it!'
    }
    else if (userPunchline.toLowerCase() !== alteredPunchline){
        message.textContent = 'Not quite! Do you give up?'
    }
}
