import photoloader from './photoloader.js'

/**
 * Charge et retourne la gallerie, stocke les donnees 
 * @param { Number } offset numero d'image a partir de laquelle la requete charge les photos
 * @param { Number } size nombre d'images que la requete doit charger
 */
let load = (uri) => {
  return photoloader.loadResource(uri)
}

export default {
  load
}