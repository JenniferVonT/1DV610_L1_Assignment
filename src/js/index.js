/**
 * Starting point of the javascript for the project.
 *
 * @author Jennifer von Trotta-Treyden <jv222th>
 */

import { AnimalAPI } from './animalAPI'

const animalAPI = new AnimalAPI()

// Catch the submit event, stop the default behaviour and handle the input.
const inputForm = document.querySelector('#inputForm')

inputForm.addEventListener('submit', (event) => {
  event.preventDefault()
  submitHandler()
})

/**
 * Handles the form submission and manipulates the DOM.
 */
async function submitHandler () {
  const name = document.querySelector('#nameInput').value
  const cat = document.querySelector('#radioAnswers [value="cat"]').checked
  const animal = cat === true ? 'cat' : 'dog'

  const response = await animalAPI.setRandomAnimal(animal)

  // If the animal is successfully added continue.
  if (response === 'SUCCESS!') {
    // Bind all the elements.
    const responseBlock = document.querySelector('#inputResponse')
    const username = document.querySelector('#username')
    const breed = document.querySelector('#breed')
    const origin = document.querySelector('#origin')
    const temperament = document.querySelector('#temperament')
    const weight = document.querySelector('#weight')
    const lifespan = document.querySelector('#lifespan')
    const description = document.querySelector('#description')
    const img = document.querySelector('#animalImg')
    const wiki = document.querySelector('#wiki')

    const facts = animalAPI.getAnimalFacts()

    // Insert all the data in the html.
    username.textContent = name.toUpperCase()
    breed.textContent = facts.breed
    temperament.textContent = facts.temperament
    weight.textContent = facts.weight
    lifespan.textContent = facts.lifespan
    description.textContent = facts.description
    img.setAttribute('src', animalAPI.getImage())
    wiki.setAttribute('href', facts.wiki)

    // Some data exists for cats but not for dogs, hide those elements completely.
    if (animal === 'cat') {
      origin.textContent = facts.origin
    } else {
      document.querySelector('#originLi').classList.add('hidden')
    }

    if (facts.wiki === undefined) {
      document.querySelector('#wikiRow').classList.add('hidden')
    }

    inputForm.classList.add('hidden')
    responseBlock.classList.remove('hidden')
  } else {
    console.error(`Something went wrong when trying to get a ${animal}`)
  }
}
