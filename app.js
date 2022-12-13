let splash = document.querySelector('.splashscreen')
let logo = document.querySelector('.splashscreen__header')
let logoItems = document.querySelectorAll('.splashscreen--items')

window.addEventListener('DOMContentLoaded', () => {

    setTimeout(() => {
        logoItems.forEach((span, idx) => {
            setTimeout(()=> {
                span.classList.add('active')
            }, (idx + 1) * 200)
        })

        setTimeout(() => {
            logoItems.forEach((span, idx) => {
                setTimeout(() => {
                    span.classList.remove('active')
                    span.classList.add('fade')
                }, (idx + 1) * 150)
            }) 
        }, 2000)

        setTimeout(() => {
            splash.style.top = "-100vh"
        }, 3500)
    })
})

let buttonMenu = document.querySelector('.nav__button')
let navMenu = document.querySelector('.nav__menu')

buttonMenu.addEventListener('click', () => {
    navMenu.classList.toggle('active')
})