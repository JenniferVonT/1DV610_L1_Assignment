/**
 * Starting point of the javascript for the project.
 *
 * @author Jennifer von Trotta-Treyden <jv222th>
 */

// Catch the submit event, stop the default behaviour and handle the input.
const inputForm = document.querySelector('#inputForm')
inputForm.addEventListener('submit', (event) => {
  event.preventDefault()
})
