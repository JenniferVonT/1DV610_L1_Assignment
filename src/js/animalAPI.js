/**
 * A class that makes the handling of both the cat and dog API easier.
 *
 * Dog API - https://thedogapi.com/
 * Cat API - https://thecatapi.com/
 *
 * @author Jennifer von Trotta-Treyden <jv222th>
 */

/**
 * A class to easier make requests to two animal APIs.
 */
export class AnimalAPI {
  /**
   * The private API key for the cat API.
   */
  #catApiKey

  /**
   * The private API key for the dog API
   */
  #dogApiKey

  /**
   * Initiates the class.
   */
  constructor () {
    this.#catApiKey = 'live_NW9uwsi4WpXH8w73tE9G66myOuOKtYbwyucbrXQAasYGA482YSmoVa3U0kEvzatS'
    this.#dogApiKey = 'live_8j4ldt618sDExuPdSlKC4ocQVUkhLgLm5D4jJtiGvLIIigLW4yD8stOm5680ykJx'
    this.DOGAPI = 'https://api.thedogapi.com/v1/images/'
    this.CATAPI = 'https://api.thecatapi.com/v1/images/'
    this.currentAnimal = {}
  }

  /**
   * Fetches a random animal and saves it in the class, returns a string for confirmation.
   *
   * @param {string} animal - Dog or cat.
   * @returns {string} - A confirmation message.
   */
  async setRandomAnimal (animal) {
    try {
      let API = ''
      let key = ''

      if (animal.toLowerCase() === 'dog') {
        API = this.DOGAPI
        key = this.#dogApiKey
      }

      if (animal.toLowerCase() === 'cat') {
        API = this.CATAPI
        key = this.#catApiKey
      }

      // First fetch a random id/img url.
      const response = await fetch(`${API}search?has_breeds=1`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          'x-api-key': key
        }
      })

      const data = await response.json()
      const id = data[0].id

      // Then make a second fetch for all the information.
      const secondResponse = await fetch(`${API}${id}`, {
        method: 'GET',
        headers: {
          'Content-type': 'application/json',
          'x-api-key': key
        }
      })

      const fullData = await secondResponse.json()

      // Handle the incoming data to only save the relevant ones.
      this.animal = {
        id,
        animal: animal.toLowerCase(),
        breed: fullData.breeds[0].name,
        origin: fullData.breeds[0].origin,
        temperament: fullData.breeds[0].temperament,
        weight: fullData.breeds[0].weight.metric,
        description: fullData.breeds[0].description,
        lifespan: fullData.breeds[0].life_span,
        wiki: fullData.breeds[0].wikipedia_url,
        image: fullData.url
      }

      return 'SUCCESS!'
    } catch (e) {
      return 'ERROR - something went wrong when fetching an animal, try again!'
    }
  }

  /**
   * Gets the image url of the current cat/dog.
   *
   * @returns {string} - an image url.
   */
  getImage () {}

  /**
   * Gets information about the current cat/dog.
   *
   * @returns {object} - Contains: breed, origin, temperament, weight (kg), lifespan, description and a wiki url.
   */
  getAnimalInfo () {}
}
