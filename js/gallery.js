import photoloader from './photoloader.js'

/**
 * galerie contenant la liste des photos
 */
let galerie = null

/**
 * permet de savoir si la gallerie contient des photos
 */
let galerie_est_null = true;

/**
 * Charge et retourne la gallerie, stocke les donnees 
 * @param { String } uri chemin de la ressource a charger
 */
let load = (uri) => {
  let promise = photoloader.loadResource(uri)
  promise.then(gal => {
    galerie = gal
    galerie_est_null = false;
  })
  return promise
}

/**
 * Charge et retourne la gallerie de la page suivante
 */
let next = () => {
  //Si on est à la dernière page on retourne à la première
  if(galerie.links.prev.href === "/www/canals5/photobox/photos/?offset=90&size=10")
    return load(galerie.links.first.href)
  //En tant normal on passe juste à la prochaine
  return load(galerie.links.next.href)
}

/**
 * Charge et retourne la gallerie de la page précédente
 */
let prev = () => {
  //Si on est à la première page on passe à la dernière
  if(galerie.links.next.href === "/www/canals5/photobox/photos/?offset=10&size=10")
    return load(galerie.links.last.href)
  //En tant normal on passe juste à la précédente
  return load(galerie.links.prev.href)
}

/**
 * Charge et retourne la gallerie de la premère page
 */
let first = () => {
  return load(galerie.links.first.href)
}

/**
 * Charge et retourne la gallerie de la dernière page
 */
let last = () => {
  return load(galerie.links.last.href)
}

/**
 * Përmet de savoir si la galerie a été chargé
 */
let galerieCharge = () => {
  return !galerie_est_null;
}

export default {
  galerie,
  galerieCharge,
  load,
  next,
  prev,
  first,
  last
}