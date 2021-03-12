import photoloader from './photoloader.js'

/**
 * Charge et retourne la gallerie, stocke les donnees 
 * @param { String } uri chemin de la ressource a charger
 */
let load = (uri) => {
  return photoloader.loadResource(uri)
}

export default {
  load
}