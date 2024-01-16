console.log('hi')

let button = document.querySelector('.new button')
let buttonText = document.querySelector('.new button span')
let less = document.querySelectorAll('.less')
let newArticles = document.querySelector('.new ul')
let rotateSVG = document.querySelectorAll('.new button svg')

button.addEventListener('click', more)

function more() {
    less.forEach((element) => {
        element.classList.toggle('hidden')
    })
    newArticles.classList.toggle('new_ul')

    rotateSVG.forEach((element) => {
        if(element.style.rotate === '-90deg') {
            element.style.rotate = '90deg'
            console.log('rotate')
        } else {
            element.style.rotate = '-90deg'
            console.log('nope')
        }
    })

    if(buttonText.innerHTML === "More") {
        buttonText.innerHTML = "Less";
    } else {
        buttonText.innerHTML = "More";
    }
    // newArticles.classList.toggle('hidden')
    console.log('yo')
}