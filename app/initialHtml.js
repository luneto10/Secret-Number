let initialValueH1 = "Find the secret number"
let initialValueH3 = `The secret number is between <span id="smallest-value"></span> and <span id="biggest-value"></span>`  

if (localStorage.getItem('portuguese')){
    initialValueH1 = "Encontre o número secreto"
    initialValueH3 = `O número secreto está entre <span id="smallest-value"></span> e <span id="biggest-value"></span>`
    
    document.querySelectorAll('.header-btn').forEach(button=>button.classList.remove('active'))
    portuguesBtn.classList.add('active')
}

section.querySelector('h1').innerHTML = initialValueH1
section.querySelector('h3').innerHTML = initialValueH3
