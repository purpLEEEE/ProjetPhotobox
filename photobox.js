import gallery from '/js/gallery.js'
import ui from '/js/gallery_ui.js'

/**
 *  Charge la gallerie et l'affiche sur la page
 * @param { Number } offset numero d'image a partir de laquelle la requete charge les photos
 * @param { Number } size nombre d'images que la requete doit charger
 */
const getRessource = (offset, size) => {
  gallery.load(offset = 0, size = 10)
  .then(response => {
     ui.display_gallery(response)
  });
} 

/**
 * Affiche les ressources lors du clique sur le bouton de chargement de la gallerie
 */
document.querySelector('#load_gallery')
  .addEventListener('click',  e => {
    getRessource()
  })
