let currentIndex = 0
const userGiveUps = []
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
    let h2 = document.createElement('h2')
    let label = document.querySelector('#joke-header')
    label.appendChild(h2)
    h2.textContent = jokesData[currentIndex].setup
    document.addEventListener('keydown', (event)=>{
        if (event.key === 'ArrowRight' && jokesData) {
            if (currentIndex < jokesData.length-1) {
                currentIndex++
                h2.textContent = jokesData[currentIndex].setup
            }
        }
    })
    handleSubmit(jokesData)
 }


function handleSubmit(jokesData){ 
    const form = document.querySelector("#form")
    form.addEventListener('submit', (event) => {
        event.preventDefault()
        let punchline = jokesData[currentIndex].punchline
        checkInput(punchline)
    })
}

function checkInput(punchline){
    let userPunchline = document.querySelector('input#punchline').value
    let alteredPunchline = punchline.toLowerCase().slice(0,-1)
    const form = document.querySelector('#form')
    let message = form.querySelector('p')
    let button = document.querySelector('button')
    if (message === null || message === undefined){
        message = document.createElement('p')
        form.appendChild(message)
    }
    if (button === null || button === undefined) {
        button = document.createElement('button')
    }
    if (userPunchline.toLowerCase() === alteredPunchline){
        message.textContent = 'You got it!'
    }
    else if (userPunchline.toLowerCase() !== alteredPunchline){
        message.textContent = 'Not quite! Do you give up?'
        button.textContent = 'I give up!'
        form.appendChild(button)
        revealPunchline(alteredPunchline)
    }
    form.reset()
}

function revealPunchline(alteredPunchline) {
    const button = document.querySelector('button')
    const answer = document.querySelector('.answer')
    let revealed = false
    button.addEventListener('click', ()=>{
        if (!revealed){
            let p = document.createElement('p')
            p.textContent = `${alteredPunchline.toUpperCase()}!`
            const existingP = answer.querySelector('p')
            if (existingP) {
                answer.removeChild(existingP)
            }
            answer.appendChild(p)
            revealed = true
            if (!userGiveUps.includes(alteredPunchline)){
                userGiveUps.push(alteredPunchline)
                console.log(userGiveUps)
            }
            }
     })
}
