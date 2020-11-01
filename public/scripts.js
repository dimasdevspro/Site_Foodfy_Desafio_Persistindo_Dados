//loop para encontrar id em data.js

const cards = document.querySelectorAll('.card_link');

for (let i=0; i < cards.length; i++) {
    const revenue = cards[i]
    revenue.addEventListener('click', () => {
        window.location.href = `/revenues/${i}`
    })
}


//condição para "esconder" ou "mostrar"

const showHidesIngredients = document.querySelectorAll('.topic-ingredients')

for (let showHidesIngredient of showHidesIngredients) {
    const buttonRevenue = showHidesIngredient.querySelector('h4')
    buttonRevenue.addEventListener('click', function (){
        if (buttonRevenue.innerHTML == "Esconder") {
            showHidesIngredient.querySelector('.ingredients').classList.add('hidden');
            buttonRevenue.innerHTML = "Mostrar"
        } else {
            showHidesIngredient.querySelector('.ingredients').classList.remove('hidden');
            buttonRevenue.innerHTML = "Esconder"
        }
    })
}

const showHidesPreparations = document.querySelectorAll('.topic-preparation')

for (let showHidesPreparation of showHidesPreparations) {
    const buttonPreparation = showHidesPreparation.querySelector('h4')
    buttonPreparation.addEventListener('click', function (){
        if (buttonPreparation.innerHTML == "Esconder") {
            showHidesPreparation.querySelector('.preparation').classList.add('hidden');
            buttonPreparation.innerHTML = "Mostrar"
        } else {
            showHidesPreparation.querySelector('.preparation').classList.remove('hidden');
            buttonPreparation.innerHTML = "Esconder"
        }
    })
}

const showHidesInformations = document.querySelectorAll('.topic-information')

for (let showHidesInformation of showHidesInformations) {
    const buttonInformation = showHidesInformation.querySelector('h4')
    buttonInformation.addEventListener('click', function (){
        if (buttonInformation.innerHTML == "Esconder") {
            showHidesInformation.querySelector('.information').classList.add('hidden');
            buttonInformation.innerHTML = "Mostrar"
        } else {
            showHidesInformation.querySelector('.information').classList.remove('hidden');
            buttonInformation.innerHTML = "Esconder"
        }
    })
}

