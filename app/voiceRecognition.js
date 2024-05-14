window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
const guessElement = document.querySelector('#guess')
const found = false
const recognition = new SpeechRecognition()
recognition.lang = 'en'

recognition.start()
recognition.addEventListener('result', onSpeak)

function onSpeak(evento){
    guess = evento.results[0][0]['transcript'];
    guess = numberWords[guess] || guess
    showGuess(guess)
    verifyGuess(guess)
}

function showGuess(guess){
    guessElement.innerHTML =`
    <div>You said:</div>
        <span class="box">${guess}</span>
    `
}

recognition.addEventListener('end', ()=>{
    recognition.start()
})

const numberWords = {
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9,
    "ten": 10
};