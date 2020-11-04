const cards = document.querySelectorAll('.card_link');

for (let i=0; i < cards.length; i++) {
    const recipe = cards[i]
    recipe.addEventListener('click', () => {
        window.location.href = `/admin/recipes/${i}`
    })
}

const showHidesIngredients = document.querySelectorAll('.topic-ingredients')

for (let showHidesIngredient of showHidesIngredients) {
    const buttonrecipe = showHidesIngredient.querySelector('h4')
    buttonrecipe.addEventListener('click', function (){
        if (buttonrecipe.innerHTML == "Esconder") {
            showHidesIngredient.querySelector('.ingredients').classList.add('hidden');
            buttonrecipe.innerHTML = "Mostrar"
        } else {
            showHidesIngredient.querySelector('.ingredients').classList.remove('hidden');
            buttonrecipe.innerHTML = "Esconder"
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

function addIngredient() {
  const ingredients = document.querySelector("#ingredients");
  const fieldContainer = document.querySelectorAll(".ingredients");

  const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);

  if (newField.children[0].value == "") return false;

  newField.children[0].value = "";
  ingredients.appendChild(newField);
}

document
  .querySelector(".add-ingredient")
  .addEventListener("click", addIngredient);

function addPreparation() {
  const preparations = document.querySelector("#preparations");
  const fieldContainer = document.querySelectorAll(".preparations");

  const newField = fieldContainer[fieldContainer.length - 1].cloneNode(true);

  if (newField.children[0].value == "") return false;

  newField.children[0].value = "";
  preparations.appendChild(newField);
}

document
  .querySelector(".add-preparation")
  .addEventListener("click", addPreparation);
