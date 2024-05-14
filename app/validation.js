function verifyGuess(guess){
    const number = +guess

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
        document.querySelector('body').innerHTML = `
        <h1>You found the secret number!</h2>
        <h3>The secret number is ${randomNumber}</h3>
        <a href="" class="play-again-btn" style="text-decoration: none"><button>Play Again</button></a>
        `
    }
}