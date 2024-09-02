/**
 * Starting point of the javascript for the project.
 *
 * @author Jennifer von Trotta-Treyden <jv222th>
 */

import { AnimalAPI } from './animalAPI'

// Catch the submit event, stop the default behaviour and handle the input.
const inputForm = document.querySelector('#inputForm')

inputForm.addEventListener('submit', (event) => {
  event.preventDefault()
  submitHandler()
})

/**
 * Handles the form submission and manipulates the DOM.
 */
function submitHandler () {
  const name = document.querySelector('#nameInput').value
  const cat = document.querySelector('#radioAnswers [value="cat"]').checked
  const animal = cat === true ? 'cat' : 'dog'

  console.log(animal)
}
