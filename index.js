document.addEventListener('DOMContentLoaded', ()=>{
    getJoke()
})

function getJoke() {
    fetch('https://official-joke-api.appspot.com/random_ten')
    .then(res => res.json())
    .then(data => {
        console.log(data)
    })
}