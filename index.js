let currentIndex = 0
const userGiveUps = []
document.addEventListener('DOMContentLoaded', ()=>{
    let jokesData
    getJokes().then(data => {
        jokesData = data
        keyPressed(jokesData)
        handleSubmit(jokesData)
    })
})

//Fetch joke data
function getJokes() {
    return fetch('http://localhost:3000/jokes')
    .then(res => res.json())
    .then(data => data)
}

//Pressing right arrow cycles through joke setups
function keyPressed(jokesData){
    //Logs first joke
    let label = document.querySelector('#joke-header')
    let h2 = document.createElement('h2')
    label.appendChild(h2)
    h2.textContent = jokesData[currentIndex].setup

    //Pressing right arrow cycles through remaining joke setups
    document.addEventListener('keydown', (event)=>{
        if (event.key === 'ArrowRight') {
            if (currentIndex < jokesData.length-1) {
                currentIndex++
                h2.textContent = jokesData[currentIndex].setup
                removeMessage()
                removeButton()
                clearAnswer()
            }
        }
    })
}


function removeMessage() {
    const form = document.querySelector('#form')
    let message = form.querySelector('p')
    form.removeChild(message)
}

function removeButton(){
    const form = document.querySelector('#form')
    let button = document.querySelector('button')
    form.removeChild(button)
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
        form.reset()
    }
    if (button === null || button === undefined) {
        button = document.createElement('button')
    }
    if (userPunchline.toLowerCase() === alteredPunchline){
        message.textContent = 'You got it!'
        removeButton()
        clearAnswer()
    }
    else if (userPunchline.toLowerCase() !== alteredPunchline){
        message.textContent = 'Not quite! Do you give up?'
        button.textContent = 'I give up!'
        form.appendChild(button)
        revealPunchline(alteredPunchline)
        form.reset()
    }
}

function revealPunchline(alteredPunchline) {
    const button = document.querySelector('button')
    const answer = document.querySelector('.answer')
    button.addEventListener('click', ()=>{
        answer.innerHTML = ' '
        let p = document.createElement('p')
        p.textContent = `${alteredPunchline.toUpperCase()}!`
        answer.appendChild(p)
            if (!userGiveUps.includes(alteredPunchline)){
                userGiveUps.push(alteredPunchline)
                logGiveUps(userGiveUps)
            }
    })
}

function clearAnswer() {
    const answer = document.querySelector('.answer')
    answer.innerHTML = ''
}

function logGiveUps(userGiveUps){
    const numberOfGiveUps = userGiveUps.reduce((acc) => {
        return acc + 1
    },0)
    const parent = document.querySelector('.counter')
    parent.innerHTML = ' '
    const counter = document.createElement('p')
    counter.textContent = `Times you've given up: ${numberOfGiveUps}`
    parent.appendChild(counter)
}
