> _Fork_ deze leertaak en ga aan de slag. Onderstaande outline ga je gedurende deze taak in jouw eigen GitHub omgeving uitwerken. De instructie vind je in: [docs/INSTRUCTIONS.md](docs/INSTRUCTIONS.md)

# GRRR.tech blog
<!-- Geef je project een titel en schrijf in één zin wat het is -->
Deze opdracht bestaat uit het herontwerpen van de grrr.tech blog pagina.
Hierbij kon de er gebruik gemaakt worden van de van grrr.tech of de grrr.nl huisstijl.

## Beschrijving
<!-- In de Beschrijving staat hoe je project er uit ziet, hoe het werkt en wat je er mee kan. -->
<!-- Voeg een mooie poster visual toe 📸 -->
<!-- Voeg een link toe naar Github Pages 🌐-->
<img width="1680" alt="Scherm­afbeelding 2024-01-25 om 22 59 11" src="https://github.com/Anna-Kyra/the-startup-responsive-interactieve-website/assets/144000242/7fba30e8-9101-45a7-b908-870c513c0521">
<img width="423" alt="Scherm­afbeelding 2024-01-25 om 22 59 44" src="https://github.com/Anna-Kyra/the-startup-responsive-interactieve-website/assets/144000242/fcdc6368-8acf-4ca6-9470-ff37e3312565">


De pagina is in kopjes opgedeeld: new, category, browse all. Bij het kopje 'New' is de (simpele) micro interactie aanwezig. Bij het kopje category zijn de grote van de vlakken de hoeveelheid posts in die category voorstellen. Bij het kopje 'Browse all' word een overzicht van alle posts laten zien. Het was de bedoeling om bij de 'Browse all' de kolommen om en om een invert scroll animatie te maken. Dit is te zien in de video die ik hiervoor heb gemaakt, want was niet toegekomen aan de animaties bij de code.

- website: https://anna-kyra.github.io/the-startup-responsive-interactieve-website/

Was niet aan de animaties toegekomen in de code, dus ik heb dit in een video gevisualiseerd.
- desktop: https://youtu.be/lo7cHjDGhYI 
- mobile: https://youtu.be/Mie_wu1ovQc 

## Kenmerken
<!-- Bij Kenmerken staat welke technieken zijn gebruikt en hoe. Wat is de HTML structuur? Wat zijn de belangrijkste dingen in CSS? Wat is er met JS gedaan en hoe? -->
# Micro interactie

JS
```JS
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
    newArticles.classList.toggle('not')

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
}
```

CSS
```CSS
.hidden {
    display: none;
}
```
De micro interactie gaat over meer blog posts laten zien bij het kopje 'New'. Hierbij toggle je de drie blog posts die nog niet te zien zijn met een `.hidden` class.

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).

