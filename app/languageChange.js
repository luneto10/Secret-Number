englishBtn.addEventListener('click',()=>{
    hasActive = englishBtn.classList.contains("active")
    if (hasActive){
        return
    }

    //Remove the active from all
    document.querySelectorAll('.header-btn').forEach(button=>button.classList.remove('active'))
    englishBtn.classList.add('active')

    localStorage.clear()
    localStorage.setItem('english', 'en')

    window.location.reload()
})

portuguesBtn.addEventListener('click',()=>{
    hasActive = portuguesBtn.classList.contains("active")
    if (hasActive){
        return
    }

    localStorage.clear()
    localStorage.setItem('portuguese', 'pt-Br')
    window.location.reload()
})
