function verifyGuess(guess){
    const number = +guess
    if(recognition.lang == 'en'){
        if (Number.isNaN(number)){
            guessElement.innerHTML += `<div>${guess} is not a number</div>`
        }
        else if(number < smallestValue || number > biggestValue){
            guessElement.innerHTML +=`<div>The guess should be between ${smallestValue} and ${biggestValue}<div>`
        } 
        else if (number < randomNumber){
            guessElement.innerHTML += `<div>The secret number is bigger <i class="fa-solid fa-arrow-up-long"></i></div>`
        }
        else if (number > randomNumber){
            guessElement.innerHTML += `<div>The secret number is smaller <i class="fa-solid fa-arrow-down-long"></i></i></div>`
        } 
        else if (number == randomNumber){
            section.innerHTML = `
            <h1>You found the secret number!</h2>
            <h3>The secret number is ${randomNumber}</h3>
            <a href="" class="play-again-btn" style="text-decoration: none"><button>Play Again</button></a>
            `
        }
    } else if(recognition.lang == 'pt-Br'){
        if (Number.isNaN(number)){
            guessElement.innerHTML += `<div>${guess} não é um número</div>`
        }
        else if(number < smallestValue || number > biggestValue){
            guessElement.innerHTML +=`<div>O chute deve ser entre ${smallestValue} e ${biggestValue}<div>`
        } 
        else if (number < randomNumber){
            guessElement.innerHTML += `<div>O número secreto é maior<i class="fa-solid fa-arrow-up-long"></i></div>`
        }
        else if (number > randomNumber){
            guessElement.innerHTML += `<div>O número secreto é menor<i class="fa-solid fa-arrow-down-long"></i></i></div>`
        } 
        else if (number == randomNumber){
            section.innerHTML = `
            <h1>Você encontrou o número secreto!</h2>
            <h3>O número secreto é ${randomNumber}</h3>
            <a href="" class="play-again-btn" style="text-decoration: none"><button>Jogar novamente</button></a>
            `
        }
    }
    
}