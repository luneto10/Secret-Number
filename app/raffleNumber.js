const randomNumber = generateRandomNumber()

function generateRandomNumber(){
    return parseInt(Math.random() * biggestValue + 1)
}

const smallestValueElement = document.getElementById("smallest-value")
smallestValueElement.innerHTML = smallestValue 

const biggestValueElement = document.getElementById("biggest-value")
biggestValueElement.innerHTML = biggestValue 