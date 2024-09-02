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
  }
}
