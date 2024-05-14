window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition()

const guessElement = document.querySelector('#guess')

if (localStorage.getItem('portuguese')){
    recognition.lang = 'pt-Br'
}
else{
    recognition.lang = 'en'
}
recognition.start()
recognition.addEventListener('result', onSpeak)

function onSpeak(evento){
    guess = evento.results[0][0]['transcript'];
    console.log(guess);
    guess = numberWords[guess.toLowerCase()] || guess
    showGuess(guess)
    verifyGuess(guess)
}


function showGuess(guess){
    guessElement.innerHTML = (recognition.lang == 'en') ? `
    <div>You said:</div>
    <span class="box">${guess}</span>
    ` : `
    <div>Você disse:</div>
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