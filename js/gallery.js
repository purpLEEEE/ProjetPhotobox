import photoloader from './photoloader.js'

let galerie = null

/**
 * Charge et retourne la gallerie, stocke les donnees 
 * @param { String } uri chemin de la ressource a charger
 */
let load = (uri) => {
  let promise = photoloader.loadResource(uri)
  promise.then(gal => {galerie = gal})
  return promise
}

let next = () => {
  return load(galerie.links.next.href)
}

let prev = () => {
  return load(galerie.links.prev.href)
}

let first = () => {
  return load(galerie.links.first.href)
}

let last = () => {
  return load(galerie.links.last.href)
}

export default {
  galerie,
  load,
  next,
  prev,
  first,
  last
}