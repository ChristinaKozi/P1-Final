document.addEventListener('DOMContentLoaded', ()=>{
    getJokes()
    keyPressed()
})

function getJokes() {
    return fetch('http://localhost:3000/jokes')
    .then(res => res.json())
    .then(data => data)
}

function keyPressed(){
    let jokesData
    let currentIndex = 1
    let h2 = document.createElement('h2')
    let label = document.querySelector('#joke-header')
    label.appendChild(h2)

    getJokes().then(data => {
        jokesData = data
        h2.textContent = jokesData[0].setup
        })

    document.addEventListener('keydown', (event)=>{
        if (event.key === 'ArrowRight' && jokesData) {
            if (currentIndex < jokesData.length) {
                jokesData.forEach((joke, index) => {
                    if (index === currentIndex){
                        h2.textContent = joke.setup
                        }
                });
                currentIndex++
            }
        }
    })
}




